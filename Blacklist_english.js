$('document').ready(function(){
			$('#add').on('click',function(){
				var number;
				number = $('input').val();
				
				if(number <= 0 || number>15)
					alert('Wrong number!!! Choose number from 1 to 15');
			    if(number == 1 )
				{
					$('#info').html('<div><p>Clarence Callahan, aka "Razor"</p><img src="img/bl/p1.png" alt="Raizor"><br><p>Raizor got ahead only thanks to your car, and now he rolls along the street as if he were the master of life. He does not care about the means, he is interested in the end. You, too, can be a tool for him. This guy cannot be trusted. </p> <p> At the start of the game, he rode a Ford Mustang GT (2005) with a unique fiery vinyl that had his nickname printed on it. Then he bought a BMW M3 GTR, taking this car away from the player in a dishonest way, having previously sabotaged it before the race.</p><img src="img/bl/1.1.jpg" alt="Raizor_car_1"><br><img src="img/bl/1.2.jpg" alt="Razor_car_2"></div>');
				}
				if(number == 2)
				{
					$('#info').html('<div><p>Tohru "Bull" Sato</p><img src="img/bl/p2.png" alt="Bull"><br><p>Tohru is just a hard worker. Without Razors help, he would only dream of racing. He thinks that he deserves such a gift from fate. If so, then he served poorly - it was enough only for fashionable paint, everything else was so-so. Yes, he is terribly afraid of scratching his car - keep that in mind. </p> <p> He drives a black Mercedes-Benz SLR McLaren without appliqués</p><img src="img/bl/2.jpg" alt="Bull_car"><br></div>');
				}
				if(number == 3)
				{
					$('#info').html('<div><p>Ronald "Ronnie" McCree</p><img src="img/bl/p3.png" alt="Ronnie"><br><p>Ronnie is a stuffed animal. One of the mamas sons who think they are outcasts. They gave him a wheelbarrow in exchange for a promise to graduate from college. But here you go - he is very good at the wheel. He has enough money for lessons from the best racers. </p> <p> At the beginning of the game he drove a yellow Toyota Supra, but at the next meeting with the player he changed it to a yellow Aston Martin DB9 with a unique applique.</p><img src="img/bl/3.1.png" alt="Bull"><br><img src="img/bl/3.jpg" alt="Ronnie_car"><br></div>');
				}
				if(number == 4)
				{
					$('#info').html('<div><p>Joe "JV" Vega</p><img src="img/bl/p4.png" alt="JV"><br><p>I dont understand how JV is still alive. His schedule will drive whoever you want to the coffin: at night parties, in the afternoon of the race ... Every dog here knows him. Newbies imitate him, and the cops are afraid. If you see a green Dodge Viper somewhere - you should know that something is going on. </p> <p> Rides a green Dodge Viper SRT-10 (2003) with a unique applique</p><img src="img/bl/4.jpg" alt="JV_car"><br></div>');
				}
				if(number == 5)
				{
					$('#info').html('<div><p>Weight "Webster" Allen is a Camden Beach rider ranked 5th on the Black List. After defeating him, police level 5 is unlocked.</p><img src="img/bl/p5.png" alt="Webster"><br><p>Webster is all over the head. He talks about cars as a science. Optimal trajectories, torques ... She dreams of going into big sports. And all day he rubs in the shops - looking for new items. Does the car have a seat, he doesnt care. The main thing is a cool engine. </p> <p> Drives a Chevrolet Corvette C6 with a unique applique</p><img src="img/bl/5.jpg" alt="Webster_car"><br></div>');
				}
				if(number == 6)
				{
					$('#info').html('<div><p>Hector "Ming" Domingo is a Blacklist (# 6) racer from Rockport.</p><img src="img/bl/p6.png" alt="Ming"><br><p>Ming, like, cool, police radar thunder. He is proud that his car looks like it was off the assembly line. By the way, he once won it from some rich sucker. Everything under the hoods is old, but fine-tuned, like an exhibition, and flies like lightning. </p> <p> Rides a Lamborghini Gallardo with a unique applique.</p><img src="img/bl/6.jpg" alt="Ming_car"><br></div>');
				}
				if(number == 7)
				{
					$('#info').html('<div><p>Kira "Kamikaze" Nakazato is a Rockport racer ranked 7th on the blacklist.</p><img src="img/bl/p7.png" alt="Kaze"><br><p>A mad bitch, a clever little thing, but this is not the main thing. The main thing is speed. This girl is a real hurricane. You gape, she will sweep you out of the way and will not notice.</p><p>Ездит на Mercedes-Benz CLK 500 с уникальной аппликацией.</p><img src="img/bl/7.jpg" alt="Kaze_car"><br></div>');
				}
				if(number == 8)
				{
					$('#info').html('<div><p>Jade "Jewels" Barrett is a Blacklisted 8th Rockport racer.</p><img src="img/bl/p8.png" alt="Jewels"><br><p>Think Jewels is just pussy twisted on muscle guys? Well, in general, youre right. Only now she also drives like a god, and her car is not one of the last. </p> <p> She drives a Ford Mustang GT (2005) with a unique application.</p><img src="img/bl/8.jpg" alt="Jewels_car"><br></div>');
				}
				if(number == 9)
				{
					$('#info').html('<div><p>Eugene "Earl" James is a # 9 Blacklisted racer from Gray Point. After defeating it, the Rockport area and police level 4 are unlocked.</p><img src="img/bl/p9.png" alt="Earl"><br><p>This type came from somewhere in the east, but often turns on the coast. Fan of foreign cars, damn it. In general, he slowly but surely goes his own way. </p> <p> Rides a Mitsubishi Lancer Evolution VIII</p><img src="img/bl/9.jpg" alt="Earl_car"><br></div>');
				}
				if(number == 10)
				{
					$('#info').html('<div><p>Carl "Baron" Smith is a Blacklisted 10th Rockport racer.</p><img src="img/bl/p10.png" alt="Baron"><br><p>This guy called himself Baron. In fact, hes just a rich daddy from the coast. Thinks that his custom-made car is the only one in the whole world. One thing is clear - no one needs such rubbish for that kind of money. You should have shown him what cars are capable of without frills! </p> <p> Rides a black Porsche Cayman S with a unique applique and red tint.</p><img src="img/bl/10.jpg" alt="Baron_car"><br></div>');
				}
				if(number == 11)
				{
					$('#info').html('<div><p>Lou "Big Lou" Park - Blacklisted 11th Rockport Racer</p><img src="img/bl/p11.png" alt="Big_Lou"><br><p>A real Korean macho man. Dont laugh, I find it funny too. He knows how to show off in front of the girls, he cant take that away - but as he sees the cop, straight into the bushes. </p> <p> He drives a black Mitsubishi Eclipse GT in yellow tint. Spoiler - Reaper.</p><img src="img/bl/11.jpg" alt="Big_Lou_car"><br></div>');
				}
				if(number == 12)
				{
					$('#info').html('<div><p>Isabel Diaz a.k.a. Izzy is one of the tertiary antagonists of Need for Speed: Most Wanted. Takes 12th place in the black list.</p><img src="img/bl/p12.png" alt="Izzy"><br><p>Anything you want - but dont mess with Issi. She has nitrous oxide instead of blood, and the cars are her sisters. Her whole family is like that, even her great-grandfather was a racer at one time. By the way, there are a lot of her relatives hanging around here. A real gang. </p> <p> Drives a gray Mazda RX-8 with a unique vinyl, dark turquoise tint, wheels from Ro Ja. Spoiler - Banshee with carbon fiber finish.</p><img src="img/bl/12.jpg" alt="Izzy_car"><br></div>');
				}
				if(number == 13)
				{
					$('#info').html('<div><p>Victor "Vic" Vasquez is an illegal driver in Need for Speed: Most Wanted and is on the Rockport Blacklist of Most Wanted Racers. Defeating him unlocks the Camden area and police level 3. A. I., which surpasses A.I. Sonny, Teza and Issy.</p><img src="img/bl/p13.png" alt="Vic"><br><p>This dude has been sitting in thirteenth place for ages. It is weak for him to rise higher, and no one can throw him down. He is not so simple, and he knows how to hold the wheel. Stretch your finger and bite off your whole hand. </p> <p> Viks car is a dark blue Toyota Supra with a unique vinyl, dark orange tint and brown wheels from O.Z. Opera. The car windshield has a BRIDE sticker. Car spoiler - Rocker 5.</p><img src="img/bl/13.jpg" alt="Vic_car"><br></div>');
				}
				if(number == 14)
				{
					$('#info').html('<div><p>Vince "Tez" Kilic is a character in Need for Speed: Most Wanted. It is in the 14th place on the black list.</p><img src="img/bl/p14.png" alt="Taz"><br><p>This nutcase is a walking problem. The cops shudder when they hear his nickname on the air. They hate him, he responds in kind. In general, dont yawn - this guy preys on newbies all over Rosewood.</p><p>Автомобиль Тэза — Lexus IS 300 болотного цвета с уникальным винилом-черепом, золотистой тонировкой, красными дискам</p><img src="img/bl/14.jpg" alt="Taz_car"><br></div>');
				}
				if(number == 15)
				{
					$('#info').html('<div><p>Ho "Sonny" Seung</p><img src="img/bl/p15.png" alt="Sonny"><br><p>This is Sonny. He is constantly chasing new parts and has poured a lot of money into his car, so dont be fooled by the exterior - this is not a car, but a real fighter. </p> <p> Sonny drives a white Volkswagen Golf GTI with a unique blue vinyl, red tinted , black discs.</p><img src="img/bl/15.jpg" alt="Sonny_car"><br></div>');
				}

			});
			
});