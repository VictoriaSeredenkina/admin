import { useState, useEffect } from 'react';

function RadioButtons({ id }) {

    const [selectedValue, setSelectedValue] = useState(null);
    const [options, setOptions] = useState({
        [id]: '',
    });

    useEffect(() => {
        let info = localStorage.getItem("serials") ?? "";
        if(info) {
            // Получаем сохраненное значение из localStorage
            const arr = JSON.parse(localStorage.getItem('serials'));

            // Если значение существует, устанавливаем его в состояние компонента
            let index = -1;
            arr.map((x, i) => {
                if(id in x) index = i;
            })
            if(index > -1) {
                const obj = arr[index];
                const key = Object.keys(obj)[0];
                const val = obj[key];
                setSelectedValue(val);
            }
        }
    }, []);

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setOptions((prevState) => ({
          ...prevState,
          [id]: value,
        }));
        setSelectedValue(value);
    };

  const handleSubmit = (event) => {
   
   

    //localStorage.removeItem("serials");

    // определяем ключ и значение для сохранения в localStorage
    const key = "serials";
    let value;
    let info = localStorage.getItem(key) ?? "";
    if (info) {
        const arr = JSON.parse(info);
        let index = -1;
        arr.map((x, i) => {
            if(id in x) index = i;
        })
        if(index > -1) arr.splice(index, 1);

        if(arr.length === 0) {
            value = "[" + JSON.stringify(options) + "]";
        }
        else {
            info = JSON.stringify(arr);

            info = info.replace("[", "");
            info = info.replace("]", "");
            value = "[" + info + "," + JSON.stringify(options) + "]";
        }
    }
    else {
        value = "[" + JSON.stringify(options) + "]";
    }
    localStorage.setItem(key, value);
    console.log(options);
  };

  return (
    <form onSubmit={handleSubmit} className='formCheck'>
        <div key={id}>
          <div>
            <label className='textRadio'>
              <input
                type="radio"
                name={`option-${id}`}
                value="yes"
                checked={selectedValue === `yes`}
                onChange={(e) => handleOptionChange(e, id)}
                className='Radio'
              />
              Просмотрено
            </label>
          </div>
          <div>
            <label className='textRadio'> 
              <input
                type="radio"
                name={`option-${id}`}
                value="maybe"
                checked={selectedValue === `maybe`}
                onChange={(e) => handleOptionChange(e, id)}
                className='Radio'
              />
              Буду смотреть
            </label>
          </div>
          <div>
            <label className='textRadio'>
              <input
                type="radio"
                name={`option-${id}`}
                value="no"
                checked={selectedValue === `no`}
                onChange={(e) => handleOptionChange(e, id)}
                className='Radio'
              />
              Не смотрел
            </label>
          </div>
        </div>
        <button type="submit" className='buttonRadio'>Отправить</button>
    </form>
  );
}

export default RadioButtons;
