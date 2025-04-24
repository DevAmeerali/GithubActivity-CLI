#!/usr/bin/env node


import axios from 'axios';

const username = process.argv[2];

if(!username){
    console.log(("Please provide a valid username"));
    process.exit(1);
}

const apiURL = `https://api.github.com/users/${username}/events`;

async function getActivity() {
    try {
        const response = await axios.get(apiURL, {
            headers: {
                'User-Agent': 'github-activity-cli',
                Accept: 'application/vnd.github.v3+json'
            }
        });

        const events = response.data.slice(0, 10);

        if(events.length === 0) {
            console.log("No Recent Activity.")
            return;
        }

        events.forEach((event) => {
            let output = '';
            const repoName = event.repo.name;

            switch (event.type) {
                case "PushEvent":
                output = `Pushed ${event.payload.commits.length} commits in ${repoName}`;
                break;
                case 'IssuesEvent':
                output = `${event.payload.action === 'opened' ? 'Opened': 'Closed'} an issue in ${repoName}`;
                break
                case "WatchEvent":
                output = `Starred ${repoName}`;
                break
                case "PullRequestEvent":
                output = `${event.payload.action === 'opened' ? 'Opened' : 'Closed'} a pull request in ${repoName}`
                break

                default:
                output = `Did ${event.type} in ${repoName}`;
            }
            console.log('•', (output));
        });
    } catch (error) {
        console.log((`Please provide a GitHub username.`), error.response?.data?.message || error.message);
    }

}

getActivity();
