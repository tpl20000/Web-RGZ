async function vac() {
	let job = document.getElementById("in").value;
    let url = `https://api.hh.ru/vacancies?currency=RUR&only_with_salary=true&text=${job}`;
    let response = await fetch(url).then(res => res.json()).then(ans => {
        let vacs ="";
        for(let i = 0; i<ans.items.length;i++)
        {
        let salary = ""
        if(ans.items[i].salary.from != null)
        {
            salary = "От " + ans.items[i].salary.from+ " " +ans.items[i].salary.currency;
        }
        else if (ans.items[i].salary.from == null)
        {
            salary = "Не указана";
        }
        vacs += "Вакансия: "+ans.items[i].name +'\n'+"Город: "+ans.items[i].area.name+'\n'+"Зарплата: "+salary+'\n'+"Ссылка: "+ans.items[i].alternate_url+'\n'+"____________________________________________________"+'\n';
        }
        document.getElementById("task").innerText=vacs;
    })
}