# Half-Baked React Busy Town

✨ Due on January 27th ✨

**Netlify link** -> https://www.abriels-busy-town.netlify.app

Visit the live ***demo*** here: [Live Demo](https://lucid-clarke-dc44ce.netlify.app/)


---
## The Golden Rule:
🦸 🦸‍♂️ Stop starting and start finishing. 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

---
### Git Terminal Commands
git status
git commit -m "
git push origin -u dev
---

### To-do:
- [x] npm i
- [x] make dev branch
- [x] generate netlify deploy site
- [x] add netlify link to github repo
- [x] create Components folder

- /App 
    - [x] import useState
    - track the following state with useState hooks:
        - [x] lightColor (string)
        - [x] lizardSize (number)
        - [x] alienSize (number)
        - [x] traffic (array of strings)
    - Input code necessary for each element to function properly:

    - Alien
        - [x] add onClick to Alien monster button for increasing alienSize
            - [x] Alien size increases as expected
        - [x] add onClick to Alien monster button for decreasing size & decreases as expected
            - [x] Alien size decreases as expected
    - Lizard
        - [x] add onClick to Lizard monster button for increasing size
            - [x] Lizard size increases as expected
        - [x] add onClick to Lizard monster button for decreasing size
            - [x] Lizard size decreases as expected
    - <TrafficLight /> buttons
        - [x] add onClick to traffic light buttons for each color -> onClick={() => setLightColor ('color')
            - [x] when button is clicked, the color of the light in state is set to the correct color
    - <VehicleList /> buttons
        - [x]add onClick to vehicle list buttons for each vehicle -> onClick={() => setTraffic ([...traffic, 'vehicle'])
        - [x] when button is clicked, the vehicle in state renders correctly

---

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On click, alien grows or shrinks based on button click  |        .5 |
| On click, lizard grows or shrinks based on button click  |        .5 |
| On click, the streetlight changes to the correct color |        1 |
| On click, the correct vehicle is added to the traffic section |        1 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : tracks state for `lightColor`, `lizardSize`, `alienSize`, and `traffic` |1|
| `App()` : `lightColor`, `lizardSize`, `alienSize`, and `traffic` all change on button clicks |1|
| `App()` : passes state as props correctly to `TrafficLight` and `VehicleList` |1|
| `TrafficLight({ color })` : renders the correct css class based on the `color` prop |1|
| `VehicleList({ vehicles })` : maps over the list of vehicles in props, rendering a `Vehicle` component for each vehicle string |1|
| `Vehicle({ vehicle })` : render a different emoji depending on what string is passed in for the `vehicle` prop |1|

![image](https://user-images.githubusercontent.com/16160135/150245846-8afae4ba-74f9-4f4f-a40a-a32064e6d429.png)
