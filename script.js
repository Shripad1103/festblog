gsap.from(".nav-logo, .nav-signin, #nav-login ",{
    y:-100,
	opacity:0,
	duration:1,
	stagger:0.3,
	scrollTrigger:".nav-logo, .nav-signin, #nav-login "
})


gsap.from(".h1-container h1, .h1-container a",{
    y:100,
	opacity:0,
	duration:1,
	stagger:0.9,
	scrollTrigger:".h1-container h1, .h1-container a"
})

gsap.from(".page1 img",{
    y:100,
    opacity:0,
    rotate:-40,
    duration:0.5,
	stagger:0.3,
	scrollTrigger:".page1 img"
})

gsap.from(".qotediv h1, .qotediv h3, .qotediv #create",{
    x:-100,
	opacity:0,
	duration:0.5,
	stagger:0.3,
	scrollTrigger:{
		trigger:".qotediv h1, .qotediv h3, .qotediv #create",
		scroller:"body",
		start:"top 50%"
	}
})

gsap.from(".page2 img",{
    y:100,
    rotate:50,
    duration:0.5,
	stagger:0.3,
	scrollTrigger:{
		trigger:".page1 img",
		scroller:"body",
		start:"center 80%"
	}
})

gsap.from(".qotediv2 h1, .qotediv2 h3",{
    x:100,
	opacity:0,
	duration:1,
	stagger:0.3,
	scrollTrigger:{
		trigger:".qotediv2 h1, .qotediv2 h3",
		scroller:"body",
		start:"center 80%"
	}
})


gsap.from(".vlog1 h1, .vlog1 h3",{
    y:100,
	opacity:0,
	duration:1,
	stagger:0.3,
	scrollTrigger:".vlog1 h1, .vlog1 h3"
})

gsap.from(".vlog2 h1, .vlog2 h2",{
    x:-100,
	opacity:0,
	duration:1,
	stagger:0.3,
	scrollTrigger:".vlog2 h1, .vlog2 h2"
})

gsap.from(".vlog2 video",{
    x:100,
	opacity:0,
	duration:1,
	stagger:0.3,
	scrollTrigger:".vlog2 video"
})

// gsap.matchMedia().add("(max-width:414px)",()=>{
// 	gsap.from(".page1 img",{
// 	y:100,
//     opacity:0,
//     rotate:-40,
//     duration:0.5,
// 	stagger:0.3,
// 	scrollTrigger:{
// 		trigger:".page1 img",
// 		scroller:"body",
// 		markers:true,
// 		start:"top 100%"
// 	}
// 	})
// })







