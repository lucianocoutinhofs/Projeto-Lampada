const turnOn = document.getElementById ( 'turnOn');
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1

}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = 'lampacesa.jpg';
        document.body.classList.add('ligar');
        
        
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = 'lampapagada1.png';
        document.body.classList.remove("ligar");
        
    }
}

function lampBroken () {
    lamp.src = 'lampquebra.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );

lamp.addEventListener ( 'dblclick', lampBroken );