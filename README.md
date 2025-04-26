<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GitHub Activity CLI</title>
</head>
<body>

<h1>GitHub Activity CLI</h1>

<p>A simple Node.js command-line tool to fetch and display the latest GitHub activity of any user.</p>

<hr>

<h2>🚀 Features</h2>
<ul>
  <li>Get the 10 most recent GitHub activities for any username</li>
  <li>Shows events like pushes, issues, pull requests, and stars</li>
  <li>Clean and colorful CLI output using chalk</li>
  <li>Uses GitHub's public REST API</li>
</ul>

<hr>

<h2>📦 Installation</h2>

<p>First, clone the repository:</p>

<pre><code>git clone https://github.com/your-username/github-activity-cli.git
cd github-activity-cli
</code></pre>

<p>Install dependencies:</p>

<pre><code>npm install
</code></pre>

<p>If you want to use it globally:</p>

<pre><code>npm link
</code></pre>

<hr>

<h2>🛠️ Usage</h2>

<p>After installing, you can run:</p>

<pre><code>node index.js &lt;github-username&gt;
</code></pre>

<p>Or if you linked it globally:</p>

<pre><code>github-activity &lt;github-username&gt;
</code></pre>

<p>Example:</p>

<pre><code>github-activity torvalds
</code></pre>

<hr>

<h2>🧰 Built With</h2>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li><a href="https://www.npmjs.com/package/axios">Axios</a></li>
  <li><a href="https://www.npmjs.com/package/chalk">Chalk</a></li>
  <li><a href="https://docs.github.com/en/rest">GitHub REST API</a></li>
</ul>

<hr>

<h2>📄 License</h2>
<p>This project is licensed under the MIT License.</p>

<hr>

<h2>✨ Author</h2>
<ul>
  <li><a href="https://github.com/DevAmeerali">DevAmeerali</a></li>
</ul>

</body>
</html>
