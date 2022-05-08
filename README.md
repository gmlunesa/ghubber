# 👾 ghubber

## About

Dashboard for fast and consolidated information on Github users, complete with Authentication using Auth0.

Sample use case:
A technical recruiter needs a Github repository summary of an applicant.

### Stack

| <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/frameworks/react.svg" width="100" height="100" alt="NodeJS"> | <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/cloud/docker.svg" width="100" height="100" alt="Docker"> |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |

## Setup

The following are the steps on running the server locally.

Clone the repository.

```
git clone https://github.com/gmlunesa/ghubber.git
```

Install Node modules.

```
npm install
```

Run the application.

```
npm start
```

If you wish to build and run a Docker image, please follow the following steps.

Build an image upon which your container will be built.

```
docker build -t sample-container:dev .
```

Run container.

```
$ docker run -it --rm \
  -v ${PWD}:/app \
  -v /app/node_modules \
  -p 3001:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  sample-container:dev
```

## License

[MIT 🌱 Fully open-source](https://github.com/gmlunesa/ghubber/blob/main/LICENSE)

## Credits

- Favicon is from the open source project [Twemoji](https://twemoji.twitter.com/).

---

Made with 💫✨ by [gmlunesa](https://gmlunesa.com)
