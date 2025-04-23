import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import CardWellcome from "./CardWellcome";
import Footer from "./Footer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	// aqui va la logica o el JS


	return (
		<>
			<Navbar />	

			<div className = " container">		
				
					<CardWellcome />
				
				
					<div className="row row-cols-1 row-cols-sm-1 row-cols-md-4 gx-4">

						<Card img="https://th.bing.com/th/id/OIP._z4OGDUks1r6gU7ZndH5WAHaFH?rs=1&pid=ImgDetMain" title="Tomate un buen cafe..." description="Estimula cada neurona y genera energia. Un cafe hace tu dia mas lindo " />
						<Card img="https://th.bing.com/th/id/R.7e14b34a9a9e9c40513e49e2d08f89d7?rik=HWB4P4JkMd4Kog&riu=http%3a%2f%2f3.bp.blogspot.com%2f-fG_d6eQzhFQ%2fUM82TqV7nKI%2fAAAAAAAAAQA%2fvbCEayI-M8k%2fs1600%2f45%2b(5).jpg&ehk=ueAu%2b6SPAu3CN8NfrPiPqRzfifN%2bTs7fz%2fu8XYhv45A%3d&risl=&pid=ImgRaw&r=0 " title="Baila bajo la lluvia" description="No dejes que nada te haga perder el buen buen humor." />
						<Card img="https://i.pinimg.com/736x/20/3b/d8/203bd8ea729eaad24ebf94bc2ac149a8--sea-turtles-maui.jpg" title="Nada siempre que puedas" description="Nadar no solo ejercita tu cuerpo sino tambien tu mente" />
						<Card img="https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/christmas-2023/secret-santa-ideas/Polaroid-Camera-D.jpg" title="Viaja y captura el momento" description="Siempre ten un viaje en mente. Esto es buena señal de que aun te sientes joven. " />

					</div>


			</div>

			<Footer />	

		</>
	);
};

export default Home;