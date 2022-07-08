# CRA Immigration site

<div><img src="https://img.shields.io/badge/React-282C34?logo=react&logoColor=61DBFB" alt="react logo" title="react" height="25" />&nbsp;&nbsp;<img src="https://img.shields.io/badge/HTML5-282C34?logo=html5&logoColor=E34F26" alt="HTML5 logo" title="HTML5" height="25" />&nbsp;&nbsp;<img src="https://img.shields.io/badge/Sass-282C34?logo=sass&logoColor=CC6699" alt="Sass logo" title="Sass" height="25" /></div>
<p></p>
This is a website and blog built for an immigration law firm. It uses Contentful headless CMS and serverless functions to get blog data.

<h3><a target="_blank"href="https://cra-immigration-demo.netlify.app">Click here to visit the live site</a></h3>


<p></p>

## Demo .GIF
![immigration.gif](https://github.com/jakesmileydev/cra-immigration/blob/main/public/immigration.gif)

## If you want to clone this project

<p>The blog is dependent upon a Contentful content model and netlify's form handling and serverless functions, so you'll have to set that up to make the project work properly. Here are some instructions to get started.</p>

<ol>
  <li><strong> Clone the github repository</strong></li>
  <p></p>
  <li><strong>Install dependencies</strong></li>
  <p></p>
  <li>
    <strong>Create a Contentful account and set up your content model with 4 fields:</strong>
    <p></p>
    <ul>
      <li>Blog Post Image - Media</li>
      <li>Blog Post Title - Short Text</li>
      <li>Blog Post Snippet - Long Text (limit 300 - 1000 characters)
      <li>Blog Post Text - Long Text (no limit)</li>
    </ul>
        <p> The snippet should be the first paragraph from the blog article or a short description of it. This is what is displayed on the Blog page before clicking the link to the whole article. You can set this as a note in the content model for clients.</p>
    <p>The Blog Post Text content supports markdown. Spaces between text will create a paragraph, bold will create a strong, and h3 elements are automatically styled with the left border etc... You may have to coach your client or just be aware when creating your own content</p>
    <p>Now is a good time to grab your space id and access token from contentful, which should have been automatically created for you. From your contentful account page go to settings > api keys</p>
  </li>
  <li><strong>Create a netlify account and set up environment variables</strong>
    <p>Follow the netlify UI to create your account and deploy your new site. Once deployed, you can access netlify environment variables from site settings > build and deploy > environment </p>
    <p>You must set two environment variables exactly like this, entering the values obtained from your contentful account</p>
    <ul>
      <li>CONTENTFUL_SPACE_ID</li>
      <li>CONTENTFUL_ACCESS_TOKEN</li>
    </ul>
    <p>Form submissions should show up in the netlify UI, you can configure this to automatically send an email to any address you like.</p>
  </li>
  <p></p>
  <li><strong>That's it!</strong></li>
  <p></p>
  <p>Create some blog articles on Contentful and you're ready to go.</p>
  <p>You can use "npm run dev" to start your local dev server, but it won't be able to get the blog articles because the api call is done on the serverless function. If you want to view the blog data in development you can run "netlify dev"</p>
  <p>If you have any questions hit me up!</p>
</ol>
