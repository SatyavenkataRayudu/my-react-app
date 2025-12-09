# My React App - Auto Deployed to AWS

This React application is automatically deployed to AWS S3 using CodePipeline and CodeBuild.

## 🚀 Deployment Pipeline

Every push to the `main` branch triggers:
1. **Source**: CodePipeline detects changes via GitHub webhook
2. **Build**: CodeBuild runs `npm install` and `npm run build`
3. **Deploy**: Optimized build is deployed to S3
4. **Live**: Website updates automatically in 5-9 minutes

## 📁 Project Structure

```
my-react-app/
├── public/
│   ├── index.html          # HTML template
│   └── robots.txt          # SEO configuration
├── src/
│   ├── App.js              # Main React component
│   ├── App.css             # Styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── buildspec.yml           # CodeBuild instructions
├── package.json            # Dependencies and scripts
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🛠️ Local Development

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Visit `http://localhost:3000` to see your app.

## 📝 buildspec.yml

The `buildspec.yml` file tells AWS CodeBuild how to build your app:

```yaml
phases:
  pre_build:
    - npm install
  build:
    - npm run build
artifacts:
  base-directory: build
```

## 🔄 Making Changes

1. Edit files locally
2. Commit changes:
   ```bash
   git add .
   git commit -m "Your change description"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```
4. Watch CodePipeline automatically deploy your changes!

## 🌐 AWS Resources

- **S3 Bucket**: Hosts the static website
- **CodePipeline**: Orchestrates the deployment
- **CodeBuild**: Builds the React app
- **GitHub**: Source code repository

## 📊 Build Process

```
GitHub Push → Webhook → CodePipeline → CodeBuild
                                          ↓
                                    npm install
                                          ↓
                                    npm run build
                                          ↓
                                    S3 Deploy → Live Website
```

## 💡 Tips

- First build takes 5-9 minutes
- Subsequent builds are faster (2-4 minutes) due to caching
- Check CodePipeline console for build status
- View build logs in CodeBuild for debugging

## 🐛 Troubleshooting

### Build fails
- Check CodeBuild logs in AWS Console
- Verify `buildspec.yml` syntax
- Ensure all dependencies are in `package.json`

### Website shows blank page
- Check browser console for errors
- Verify S3 bucket has public read access
- Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)

### Changes don't appear
- Wait 5-9 minutes for full deployment
- Check CodePipeline status
- Clear browser cache

## 📚 Learn More

- [React Documentation](https://react.dev)
- [AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/)
- [AWS CodeBuild](https://docs.aws.amazon.com/codebuild/)
- [S3 Static Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

## 📄 License

This project is open source and available for learning purposes.

---

**Built with ❤️ using React and AWS**
