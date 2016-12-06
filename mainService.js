angular.module('app').service('mainSrv', function(){

    this.data = [{
      id: "Front Gate",
      lat: "32.735194, -117.149478",
      desc: "The front gate. The zoo gets over 3 million visitors each year.",
      image: "images/info_page_img/frontgate.png"
    }, {
      id: "Front Bathroom",
      lat: "32.735320, -117.149659",
      desc: "It's a bathroom. Wash your hands.",
      image: "images/info_page_img/front_bathroom.png"
    },{
      id: "Silver Leaf langurs",
      lat:"32.7353048,-117.1502935",
      desc: "The Silver Leaf Langur exhibit. Look up for these playful leaf eating old world monkeys..",
      image: "images/info_page_img/sll.png"
    }, {
      id: "Orangs",
      lat: "32.7353339,-117.1506915",
      desc: "The Orang Exhibit. Orangutans are the most arboreal of the great apes. That being said, look for Karen, she's the one rolling along the ground. ",
      image:"images/info_page_img/orangs.png"
    }, {
      id: "Zoobrew Coffee",
      lat: "32.7352189,-117.1508199",
      desc: "Small Shop to get some coffee or tee-shirts.",
      image: "images/info_page_img/zoobrew.png"
    }, {
      id: "Gorilla view 1",
      lat: "32.7346796,-117.1517439",
      desc: "The gorilla yard has lots of space for exploration and enrichment. If you can't see them from this window keep walking around. Paul likes to sleep down here",
      image: "images/info_page_img/gorilla_pauls_point.png"
    }, {
      id: "Treetops Cafe",
      lat: "32.7346083,-117.1517738",
      desc: "Here you can stop and buy some lunch or hold a private event.",
      image: "images/info_page_img/treetops.png"
    }, {
      id: "Treetops Bathroom",
      lat: "32.7345348,-117.1517703",
      desc: "Bathroom near Treetops",
      image: "images/info_page_img/treetops.png"
    }, {
      id: "Bonobo view 1",
      lat: "32.735333, -117.149667",
      desc: "Bonobos are not chimpanzees, but they do have very similar body structures. Females are the dominant members of Bonobo society. Grooming and play are a big part of daily bonobo activities.",
      image: "images/info_page_img/bonobo1.png"
    }, {
      id: "Bonobo View 2",
      lat: "32.734195, -117.151612",
      desc: "Bonobos are not chimpanzees, but they do have very similar body structures. Females are the dominant members of Bonobo society. Grooming and play are a big part of daily bonobo activities.",
      image: "images/info_page_img/bonobo2.png"
    }, {
      id: "Pygmy Hippo",
      lat: "32.7347837,-117.1509868",
      desc: "Pygmy Hippo and Wolf Guenon Viewing. Our Pygmy Hippos are fully grown, and are different from river hippos. Pygmy Hippos are mostly nocturnal",
      image: "images/info_page_img/phippo.png"
    }, {
      id: "P Hippo Bathroom",
      lat: "32.7349533,-117.1511336",
      desc: "Bathroom near zoobrew and gorillas",
      image: "images/info_page_img/p_hippo_bathroom.png"
    }, {
      id: "Gorilla view 2",
      lat: "32.7345958,-117.151227",
      desc: "Look for the gorillas here. The often like to sit near the glass and fall asleep.",
      image: "images/info_page_img/gorilla_main.png"
    }, {
      id: "Gorilla View 3",
      lat: "32.7345065,-117.1513667",
      desc: "Gorillas are vegetarian, with incredible body mass coming from large amounts of forest browse.",
      image: "images/info_page_img/gorilla_statues.png"
    }, {
      id: "Capuchin Upper View",
      lat: "32.73471,-117.1506119",
      desc: "Capuchins are often thought of as the apes of the new world. These South American Monkeys are highly intelligent and usually can be found exploring their surroundings or forming long lasting social bonds.",
      image: "images/info_page_img/capuchin_top.png"
    }, {
      id: "Stairs/Elevator",
      lat: "32.7349026,-117.1506129,",
      desc: "Stairs and elevator both end up at the same place. You can get to the exit from either the upper level or the lower level.",
      image: "images/info_page_img/stairs_elevator.png"
    }, {
      id: "Mandrill top",
      lat: "32.7350531,-117.1505416",
      desc: "You can see the mandrills in this mixed species exhibit. Look for the bright colors from the males.",
      image: "images/info_page_img/mandrill_top.png"
    }, {
      id: "Mangabey Upper View",
      lat: "32.7350531,-117.1505416",
      desc: "These African Monkeys have quite the hair-do! Look for them sun bathing near the water.",
      image: "images/info_page_img/mangabey_top.png"
    }, {
      id: "Mandrill Bottom View",
      lat: "32.7349695,-117.150505",
      desc: "Bottom viewing for mandrills. Mandrills are the largest of the old world monkeys and this is a great place to see them up close.",
      image: "images/info_page_img/mandrill_bottom.png"
    }, {
      id: "Mangabey Bottom View",
      lat: "32.7348951,-117.1503595",
      desc: "In this mixed species exhibit you might also see Angolan Colobus monkeys. You can tell the difference from the white tufts of hair on the Colobus.",
      image: "images/info_page_img/mangabey_bottom.png"
    }, {
      id:"Capuchin Bottom View",
      lat: "32.7348381,-117.150553",
      desc:"You can often hear the capuchins trying to smash open hard shelled nuts using rocks here. The keepers like to give the capuchins items that can challenge the monkey's problem solving skills.",
      image: "images/info_page_img/mangabey_bottom.png"
    }, {
      id: "Exit",
      lat: "32.7346427,-117.1494206",
      desc: "This will take you out of the park. Thanks for visiting!",
      image: "images/info_page_img/exit.png"
    }]

    // this.getCenter = function() {
    //   return data.lat
    // }

})
