function calculation() {
    let height = +exampleInputText1.value;
    let mass = +exampleInputText2.value;
    let recomendation = "";
    let result = 0;
    let index = mass / (height ** 2);
    index = index.toFixed(2);

    if (index < 18.5) {
        recomendation = "Ваш индекс тела меньше нижнего порога, вывод - недостаточная масса тела. Поднажми";
        result = index;
}
    else if (index >= 18.5 && index < 24.9) {
        recomendation = "Ваш индекс тела находится в пределах нормы, вывод - так держать";
        result = index;
}

    else if (index >= 25 && index < 29.9) {
        recomendation = "Ваш индекс тела больше нормы, вывод - избыточная масса тела, предожирение. Пора скидывать лишние кг, опасность для здоровья";
        result = index;
}
    else if (index >= 30 && index < 34.9) {
        recomendation = "Ваш индекс тела слишком больше нормы, вывод - оуоооо, ожирение 1 степеня. Нужно срочно что-то делать";
        result = index;
}
else if (index >= 35 && index < 39.9){
        recomendation = " Ваш индекс тела слишком-слишком больше нормы, вывод - оуоооо, ожирение 2 степеня. Нужно срочно что-то делать";
        result = index;
}
else if (index >= 40 ){
        recomendation = "Ваш индекс тела  серьезно превышает норму, вывод - sos, ожирение 3 степеня. Вам нужна помощь специалистов";
        result = index;
}
    
    result = Math.round(result * 100) / 100;
    resultPlace.innerHTML = (`${result}. ${recomendation}!`);


}