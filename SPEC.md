# better web frontend
CRA SPA dashboard for display incident information on a filterable map. includes basic support for incident "details". Content for display in `reports/`
## Getting Started
First, install [Volta](https://volta.sh/). Volta manages local Node versions easily 

`curl https://get.volta.sh | bash`

Open a new bash instance and install [Node](https://nodejs.org/en/). We'll use `npm` to manage our depencies and run project related scripts 

`volta install node`

Finally, install project dependencies. From the root of the repository, `cd web && npm install`. This project uses __[Create React App](https://create-react-app.dev/)__ with a __[Typescript template](https://create-react-app.dev/docs/adding-typescript/)__.
### Getting Started with Component Development
This project uses __[React Storybook](https://storybook.js.org/)__ for isolated component development

* `npm run storybook` to start a local React Storybook server
* React Storybook docs [here](https://storybook.js.org/docs/basics/introduction/)
* Stories are located at `src/stories/`
  * [Example story](./web/src/stories/1-Button.stories.js)
* Components are located at `src/components/`
* Currently using [Emotion](https://github.com/emotion-js/emotion) to get things styled quickly
  * probably need a holistic solution for things like colors, spacing, etc

#### Components We Need
- [ ] Button
- [ ] Text Input
- [ ] Date Input (Single Date & Multi Date)
- [ ] Component for incident display
- [ ] Twitter Embed
- [ ] flex based embed list component
- [ ] Map View? (maybe too much work)
## Resources
* [Jamstack](https://jamstack.org/)
* [React Toolchain Options](https://reactjs.org/docs/create-a-new-react-app.html#more-flexible-toolchains)
  * for now probably best just to do [CRA](https://create-react-app.dev/) setup
  * [Parcel](https://parceljs.org/) would be very interesting