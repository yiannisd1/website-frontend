import React from "react";
import "./OurProjectsStyles.css";
import "@fontsource/bodoni-moda";
import projectDetail from "../../../assets/project.json";

export default function OurProjectComponent() {
	//{number: 1, name: 'Sun Cycle', description: 'The project has the goal of creating a fun, beauti…e more motivation to exercise on a regular basis.'}

	const { projects, leaders } = projectDetail;
	console.log("projectes : ", projects);
	console.log("leaders : ", leaders);
	console.log("pro1", projects[0].name);
	return (
		<div className="container">
			<div>
				<h1 className="OurProjectsHeading">Our Projects</h1>
				<p className="OurProjectsDetail">
					Redback Operations aims to harness the power of IoT, AI and 3D game
					worlds to push your exercise routine into the future. We aim to
					provide a community-driven exercise and well-being gaming experience
					with competitive elements. By developing cutting-edge technologies and
					advances in the space of IoT sensors, AI and Game development, Redback
					Operations seeks to provide users with a fully immersive experience
					where they can engage with other users both casually and competitively
					or enjoy individual exercise routines all the while receiving
					real-time feedback and tips on how to improve their performance and be
					the best person that they can be. To achieve this goal, Redback
					operations have three main objectives:
				</p>
			</div>
			<div className="Rectangle1"></div>
			<div className="HeadsetImg"></div>
			<div className="Rectangle2"></div>
			<div className="Img2"></div>
			<div className="ProjectDetail1">
				<p>
					• The development of an engaged and self-sustaining online community{" "}
					<br></br>
					<br></br>• The ability to provide real-time performance feedback to
					users through cutting edge IoT sensors and AI <br></br>
					<br></br>• Fully immersive 3D worlds that users can experience from
					the comfort of their own homes. <br></br>
					<br></br>
					<br></br>
					To be able to realize these objectives, Redback Operations has
					enlisted the skills and attributes of data scientists and analysts,
					IoT specialists, Game developers, cyber security specialists, web
					development, and DevOps experts all guided to success by a core team
					of project managers.
				</p>
			</div>
			<div className="Project1Title">
				Project {projects[0].number}: Project {projects[0].name}
			</div>
			<div className="Project1Detail">{projects[0].description}</div>
			<div className="Project2Title">
				Project {projects[1].number}: {projects[1].name}
			</div>
			<div className="Project2Detail">{projects[1].description}</div>
			<div className="Project3Title">
				Project {projects[2].number}: {projects[2].name}
			</div>
			<div className="Project3Detail">{projects[2].description}</div>
			<div className="Project4Title">
				Project {projects[3].number}: {projects[3].name}
			</div>
			<div className="Project4Detail">{projects[3].description}</div>
			<div className="BasketballBackground"></div>
			<div className="BasketballImg"></div>
			<div className="Rectangle3"></div>
			<div className="Project5Title">
				Project {projects[4].number}: {projects[4].name}
			</div>
			<div className="Project5Detail">{projects[4].description}</div>
			<div className="Project6Title">
				Project {projects[5].number}: {projects[5].name}
			</div>
			<div className="Project6Detail">{projects[5].description}</div>
			<div className="Project7Title">
				Project {projects[6].number}: {projects[6].name}
			</div>
			<div className="Project7Detail">{projects[6].description}</div>
			<div className="Project8Title">
				Project {projects[7].number}: {projects[7].name}
			</div>
			<div className="Project8Detail">
				{projects[7].description}
				The long-term goals of website and mobile application are as follows:
				<br></br>• Community Centric Features: Different variations of leader
				boards which give users a sense of community. Users will be able to add
				other users as their friends and create custom challenges for their
				groups. <br></br>• Incentive for doing more: The more users exercise,
				the more Redback coins they earn, the healthier they get. <br></br>•
				Marketplace: Users can use their redback coins in a marketplace to buy
				all sorts of things from a range of different companies. A gym
				membership, 20% discount coupon for a pair of sports headphones or
				peanut butter. You name it, our marketplace will have it! <br></br>•
				Live events: Users will be able to participate in live events which can
				take place for multiple days or weeks. There will be a participation fee
				and winners will get cash prizes and losers (who are now much healthier
				by the way) will receive redback coins. A win-win. An example of this is
				a marathon spanning 7 days. <br></br>• Personalisation: Users will be
				able to access their historical data, look at their progress, how they
				earned their redback coins, set a custom goal, and receive a custom
				exercise plan according to their own availability to exercise. The
				thought behind all these features in the long term is to give a
				competitive edge to Redback Operations when the final product is ready
				for launch. These features will bring in revenue streams for the company
				and value to the customers which will make them engage with the product
				and company frequently.
			</div>
			<div className="GymnastBackground"></div>
			<div className="GymnastImg"></div>
			<div className="Project9Title">
				Project {projects[8].number}: {projects[8].name}
			</div>
			<div className="Project9Detail">{projects[8].description}</div>
			<div className="Project10Title">
				Project {projects[9].number}: {projects[9].name}
			</div>
			<div className="Project10Detail">{projects[9].description}</div>
			<div className="Rectangle4"></div>
			<div className="Project11Title">
				Project {projects[10].number}: {projects[10].name}
			</div>
			<div className="Project11Detail">{projects[10].description}</div>
			<div className="Project12Title">
				Project {projects[11].number}: {projects[11].name}
			</div>
			<div className="Project12Detail">{projects[11].description}</div>
			{/*projects.map(d=>{
        return <div className='ProjectDetail'>
        <div className='OurProjectsHeading'><p>{d.number}</p></div>
        <p>{d.description}</p>
        </div>

      })*/}
		</div>
	);
}
