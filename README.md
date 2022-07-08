# CRA Immigration site

This is a website and blog built for an immigration law firm. It uses Contentful headless CMS and serverless functions to get blog data.

<h3><a target="_blank"href="https://cra-immigration-demo.netlify.app">Click here to visit the live site</a></h3>

## Demo .GIF
<div><img src="https://img.shields.io/badge/React-282C34?logo=react&logoColor=61DBFB" alt="react logo" title="react" height="25" />&nbsp;&nbsp;<img src="https://img.shields.io/badge/HTML5-282C34?logo=html5&logoColor=E34F26" alt="HTML5 logo" title="HTML5" height="25" />&nbsp;&nbsp;<img src="https://img.shields.io/badge/CSS3-282C34?logo=css3&logoColor=1572B6" alt="CSS3 logo" title="CSS3" height="25" /></div>

![immigration.gif](https://github.com/jakesmileydev/cra-immigration/blob/main/public/immigration.gif)

## If you want to clone this project

<p>The blog is dependent upon a Contentful content model and netlify's form handling and serverless functions, so you'll have to set that up to make the project work properly. Here are some instructions to get started.</p>

<ol>
  <li><strong> Clone the github repository</strong></li>
  <li><strong>Install dependencies</strong></li>
  <li><strong>Create a Contentful account and set up your content model with 4 fields:</strong>
    <ul>
      <li>Blog Post Image - Media</li>
      <li>Blog Post Title - Short Text</li>
      <li>Blog Post Snippet - Long Text (limit 300 - 1000 characters)
      <li>Blog Post Text - Long Text (no limit)</li>
    </ul>
        <p> The snippet should be the first paragraph from the blog article or a short description of it. This is what is displayed on the Blog page before clicking the link to the whole article. You can set this as a note in the content model for clients.</p>
  </li>
</ol>
