import type { NextPage } from "next";
import { PrismaClient, User } from "@prisma/client" 
import { ReactNode, useEffect } from "react";
import bghome from '../public/bg-home.jpg'
import { Section } from "../components/home/section";

export async function getServerSideProps(context: any) {
	const prisma = new PrismaClient()
	const data = await prisma.user.findMany()
	return { props: { data } }
}

type HomeProps = {
	data: User[],
	children?: ReactNode,
}

const Home: NextPage<HomeProps> = ({ data }) => {
let imageUrl = 'https://expertnov.ru/800/600/https/www.duodesign.co.uk/images/blog/cms7-cropped.pagespeed.1556696139.jpg/rs-2560x10000a.jpg'
	useEffect(() => {
		console.log( data )
		console.log(bghome)
	})
	return (
	<>
		<div 
		className="w-screen h-screen relative flex flex-col bg-cover bg-center text-white gap-y-7 justify-center items-center"
		style={{ background: `url(${imageUrl})` }}
		>
			<div className=" z-100 w-screen flex items-center flex-col">
				<h1 className="text-5xl w-6/12 text-center">Мы небольшая, начинающая команда которая хочет учится и набирается опыта.</h1>
				<h3 className="text-2xl font-thin">Если ты хочешь к нам то заходи к нам в группу, мы всем рады</h3>
			</div>
			<div className="absolute bg-dark-500 w-screen h-screen opacity-70%"></div>
			<div className="z-100 absolute bottom-20">
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="20.012" viewBox="0 0 35 20.012">
					<path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M23.694,25.226,36.928,11.981a2.491,2.491,0,0,1,3.533,0,2.522,2.522,0,0,1,0,3.543l-15,15.006a2.5,2.5,0,0,1-3.449.073L6.917,15.535a2.5,2.5,0,0,1,3.533-3.543Z" transform="translate(-6.188 -11.246)" fill="#f5f5f5"/>
				</svg>
			</div>
		</div>

		<main className="w-7/12 mx-auto py-50px">

	<Section title="О нас" >
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto culpa commodi minima libero repudiandae! Possimus odit iusto eaque nisi, consequatur id tempora amet laboriosam. Sequi ducimus magnam rerum asperiores eos!</p>
	</Section>

	<Section title="Участники" >
		<div className="flex gap-x-3 my-5">
		{ data.map( user => { return (
		<div 
			key={user.id} 
			className="
			w-20 h-10 rounded-md 
			bg-neutral-700 
			flex justify-center items-center 
			text-white"
		> <a href={`https://t.me/${user.telegram}`}>{ user.name }</a></div>
					)
				} ) }
		</div>
	</Section>

	<Section title="Наши проекты">
		<h2>Здесь пока что ничего нету</h2>
	</Section>


		</main>
	</>
	);
};

export default Home;
