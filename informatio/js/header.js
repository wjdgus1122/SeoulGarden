(function(){

    const headerEl = document.querySelector('header')
    const logoEl = document.querySelector('.hd_logo_wrap')
    const mapiconEl = document.querySelector('.hd_map')
    const menuicon = document.querySelectorAll('.hd_menu')
    const section_1 = document.querySelector('.section_1')
    
    
    // let stc = window.pageYOffset
    // =>구글맵 머시기대매 안먹힘 쌤한테 물어볼것.
    // 왜? 함수안에 변수를 선언해야되는지 모르겠음.


    const hdScroll = () => {
        const stc = window.pageYOffset
        // const section_1_top = Math.abs(section_1.getBoundingClientRect().top)
        const act_point = window.innerHeight

        if(stc > act_point){              
            headerEl.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
            logoEl.style.backgroundPosition = '0 38px'
            mapiconEl.style.color = 'black'
            menuicon[0].style.backgroundColor= 'black'
            menuicon[1].style.backgroundColor= 'black'
            menuicon[2].style.backgroundColor= 'black'
        }else{
            headerEl.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
            logoEl.style.backgroundPosition = '0 0'
            mapiconEl.style.color = 'white'
            menuicon[0].style.backgroundColor= 'white'
            menuicon[1].style.backgroundColor= 'white'
            menuicon[2].style.backgroundColor= 'white'
        }

        
    }

    window.addEventListener('scroll', hdScroll)

})()