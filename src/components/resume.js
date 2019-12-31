import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://avatars1.githubusercontent.com/u/55095576?s=400&u=b76a1ea094a324f59d422413f3ca1fa08a2aebcb&v=4"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Krzysztof Richter</h2>
            <h4 style={{color: 'grey'}}>Junior Front-End Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hi my name is Krzyszotf, I am a IT Technology student at Business Academy Aarhus. I am trying to develop my programing skills in order to became a Game Developer some day or a Web Developer. In my spare time I am learing the Unity Engine by using C# code, also i find joy with creating some art poroject by using Photoshop. I am trying to keep my motivation allways on high level, by playing guitar, watching movies and reading books. Currently I am working on a game using Unity, i cant share the results now, but soon i will post it on this website in Projects section.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {/* <h5>Address</h5> */}
            <h5>Phone</h5>
            <p>(+45) 91 95 32 95</p>
            <h5>Email</h5>
            <p>richterkrzysztof89@gmail.com</p>
            <h5>Web</h5>
            <p>soon..</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2017}
              schoolName="PCKZiU, Wodzisław Śląski"
              schoolDescription="During my studies at Powiatowe Centrum Kształcenia Zawodowego i Ustawicznego (PCKZiU) in Wodzislaw Slaski in Poland. I obtained the Electrical technicam title, to be more accurate i passed all of the following exams: E24, E8, E7."
               />
  
               <Education
                 startYear={2019}
                 endYear={"Now"}
                 schoolName="Business Academy Aarhus"
                 schoolDescription="Currently I am studing IT Technology at Business Academy Aarhus (Erhvervsakademi Aarhus), we are working with networks, web development and software development."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Junior Web Dveloper at Soniq Software House"
              jobDescription="Watching memes and creating new spotify playlists all the long in the peroid of 6 months, kinda depresing tho."
              />

              <Experience
                startYear={2019}
                endYear={"Now"}
                jobName="Junior Front-End Develope at Dooli"
                jobDescription="Creating components, setting up the design etc. Taking care of entire front-end of the company website"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />
                      <Skills
                      skill="Python"
                      progress={70}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
