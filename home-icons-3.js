
/*List all the icons by class*/
let icons = document.querySelectorAll('.tech-stack_icon');

let techName = document.getElementById('techName');
let techDescription = document.getElementById('techDescription');
let techImage = document.getElementById('techImage');

icons.forEach((icon) => {
	icon.addEventListener('mouseover', (e) => {showTechInfo(e)})
})

function showTechInfo(e){

  let selectedIcon = e.target.classList[1]
  
  switch(selectedIcon) {

//Col 1
    case "adobe":
        techName.textContent = "Adobe"
        techDescription.textContent = "We use the full suite of Adobe products to design and develop our websites."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636925c435a2aa5feb293e7f_adobe.png"
        break;
    case "postman":
        techName.textContent = "Postman"
        techDescription.textContent = "Postman is invaluable for testing, designing & integrating APIs into our products and services."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636927631fb28530fc2b6597_postman.png"
        break;
    case "photoshop":
        techName.textContent = "Photoshop"
        techDescription.textContent = "Photoshop is indispensable for editing and manipulating images and graphics for use in our builds."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636927cc66eb94fa3a92eb74_photoshop.png"
        break;
    case "onepassword":
        techName.textContent = "1 Password"
        techDescription.textContent = "1Password is used to facilitate team access to various online tools."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/6369286cd63c3cfb13921ebb_onepassword.png"
        break;
    case "airtable":
        techName.textContent = "Airtable"
        techDescription.textContent = "We use Airtable to create amazing automations and advanced CMS functionality for our clients."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63692892adefcd5b411471f2_airtable.png"
        break;
    case "analytics":
        techName.textContent = "Analytics"
        techDescription.textContent = "Analytics integration allows our clients to monitor, analyse and test a variety of site metrics."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636928a3ad15d14246b2889f_analytics.png"
        break;
    case "calendly":
        techName.textContent = "Calendly"
        techDescription.textContent = "Calendly integrations are popular across all industries and add scheduling functionality to our builds."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636928b8ad15d19e2bb28981_calendly.png"
        break;
    case "css3":
        techName.textContent = "CSS3"
        techDescription.textContent = "The latest version of CSS enables us to design really intricate style effects."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636928db0e1be11589f954fa_css3.png"
        break;
    case "dropbox":
        techName.textContent = "Dropbox"
        techDescription.textContent = "We use Dropbox for asset collection and file sharing."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636928ea0e1be1ffb2f95658_dropbox.png"
        break;  
    case "bubble":
        techName.textContent = "Bubble"
        techDescription.textContent = "For MVPs, prototyping and powerful applications."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63692937a54ebd119eef4179_bubble.png"
        break;
    case "figma":
        techName.textContent = "Figma"
        techDescription.textContent = "Our wireframes and prototypes are all created in Figma."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/6369294a23aa14e53d6aab5a_figma.png"
        break;
    //Col 2
    case "canva":
        techName.textContent = "Canva"
        techDescription.textContent = "For marketing materials and branding."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63692ea91fb2855a7d2bf0fa_canva.png"
        break;
    case "git":
        techName.textContent = "Git"
        techDescription.textContent = "We use Git for version control."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63692f4d9ce4a37a21a3aa6d_git.png"
        break;
    case "godaddy":
        techName.textContent = "GoDaddy"
        techDescription.textContent = "Our preferred domain registration provider."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63692fe07bdfad2a67ab8cec_godaddy.png"
        break;
    case "github":
        techName.textContent = "GitHub"
        techDescription.textContent = "For version control and collaboration."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63692fc228ba31f4d40dc860_github.png"
        break;
    case "googlefonts":
        techName.textContent = "Google Fonts"
        techDescription.textContent = "For clean & elegant open source fonts."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63693241048e0aa010d0829c_googlefonts.png"
        break;
    case "googleworkspace":
        techName.textContent = "Google Workspace"
        techDescription.textContent = "The Google Workspace tools are integral to communication, organisation & planning."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636933172686f86a68668da6_googleworkspace.png"
        break;
    case "stripe":
        techName.textContent = "Stripe"
        techDescription.textContent = "We create online payment solutions for our clients using Stripe."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636933813cb93257e2212685_stripe.png"
        break;
    case "heroku":
        techName.textContent = "Heroku"
        techDescription.textContent = "For cloud-based applications."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636933c82544be228183df3c_heroku.png"
        break;
    case "html5":
        techName.textContent = "HTML 5"
        techDescription.textContent = "We use the latest semantic HTML for optimal UX."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/6369347b64f1270abcaf4dda_html5.png"
        break;
    case "illustrator":
        techName.textContent = "Illustrator"
        techDescription.textContent = "We use illustrator for vector based graphic design."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636934bb74465b4fd36cb231_illustrator.png"
        break;
    case "loom":
        techName.textContent = "Loom"
        techDescription.textContent = "We use loom for quick and efficient communication as welll as for onboarding our clients."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63693506fc28b787882c94fa_loom.png"
        break;
    case "javascript":
        techName.textContent = "JavaScript"
        techDescription.textContent = "We use JavaScript in all of our builds to enhance functionality."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/6369362545bc952bbf9fc52d_javascript.png"
        break;
    case "mailchimp":
        techName.textContent = "Mailchimp"
        techDescription.textContent = "For marketing automations for our client builds."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636936e76c32ea3056e50085_mailchimp.png"
        break;
    //Col 3
    case "indesign":
        techName.textContent = "In Design"
        techDescription.textContent = "Used particularly for clients who request branding services."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63693979e5e8364f979240a5_indesign.png"
        break;
    case "slack":
        techName.textContent = "Slack"
        techDescription.textContent = "Our teams and clients communicate and organise using Slack."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63693e11adefcd86cb15aa63_slack.png"
        break;
    case "shopify":
        techName.textContent = "Shopify"
        techDescription.textContent = "We create Shopify stores and integrate them into our Webflow builds."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63693e327bdfad8f23ac6ab6_shopify.png"
        break;
    case "react":
        techName.textContent = "React"
        techDescription.textContent = "We can integrate react components into our Webflow builds."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63693e50048e0a42a3d18094_react.png"
        break;
    case "adwords":
        techName.textContent = "AdWords"
        techDescription.textContent = "We create adwords accounts for our clients and connect them to their Analytics."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63693e6fd433864ea0af7714_adwords.png"
        break;
    case "linkedin":
        techName.textContent = "LinkedIn"
        techDescription.textContent = "We use LinkedIn to connect with businesses, for communication and for expanding our network."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63693ec7445f9b40b0d9c819_linkedin.png"
        break;
    case "make":
        techName.textContent = "Make"
        techDescription.textContent = "For integrations and automations."
        techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63693f3582ea4c0522d039a0_make.png"
        break;
  case "notion":
    techName.textContent = "Notion"
    techDescription.textContent = "For organisation, planning and as a CRM."
    techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63693f9ae5e836700d92a78e_notion.png"
    break;
  case "typescript":
    techName.textContent = "TypeScript"
    techDescription.textContent = "Because sometimes even JavaScript needs something extra."
    techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63693fef7bdfadcb27ac89a7_typescript.png"
    break;
  case "vscode":
    techName.textContent = "VS Code"
    techDescription.textContent = "Our code editor of choice."
    techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/63694077ed4d32ebed0d3b74_vscode.png"
    break;
  case "webflow":
    techName.textContent = "Webflow"
    techDescription.textContent = "Our website creation platform of choice."
    techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636940b8ed4d32eb190d3ed9_webflow.png"
    break;
  case "zapier":
    techName.textContent = "Zapier"
    techDescription.textContent = "For powerful integrations and automations."
    techImage.src = "https://uploads-ssl.webflow.com/6359366be98d64842004c4dd/636940fced4d32d13b0d47fe_zapier.png"
    break;
  
  default:
    techName.textContent = "Hover over or tap any icon..."
    techDescription.textContent = "...to see how we use the tech."

}

}
