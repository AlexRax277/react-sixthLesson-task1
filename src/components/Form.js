const Form = (props) => {
    const handleChange = (e) => {
        const {name, value} = e.target;
        props.setForm(prevForm => ({...prevForm, [name]: value}));
    }

    return <div>
        <div style={{display:'inline-block'}}>
            <label htmlFor="name">Название</label>
            <input type="text" 
                name='name'
                className='name'
                style={{display: 'block'}}
                value={props.form.name}
                onChange={handleChange}
            />
        </div>

        <div style={{display:'inline-block'}}>
            <label htmlFor="timeZone">Временная зона</label>
            <input type="text" 
                name='timeZone'
                className='timeZone'
                style={{display: 'block'}}
                value={props.form.timeZone}
                onChange={handleChange}
            />
        </div>

        <button type='submit'>Добавить</button>
    </div>
}

export default Form;