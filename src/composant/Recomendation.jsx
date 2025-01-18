function Recomendation (){
    const curentMonth = new Date().getMonth();
    const isSpring = curentMonth >= 2 && curentMonth <= 5

    if(!isSpring){
        return <div>Pas le bon moment😔</div>
    }else{
        return <div>Le bon moment😊</div>
    }

}
export default Recomendation