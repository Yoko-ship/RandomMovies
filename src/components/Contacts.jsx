import './header.css'

function Contacts(){


    return(
        <>
        <div className='contacts'>
            <h1>Контакты</h1>
            <span>Мы всегда рады услышать ваше мнение и помочь вам! <br/>
            Если у вас есть вопросы, предложения или вы хотите связаться с нами <br/>
             по любому поводу, не стесняйтесь использовать информацию ниже.</span>

            
        </div>
        <form action='https://getform.io/f/apjmvzza' method='POST' encType='multipart/form-data' name='EmailForm'>
                    
            <label htmlFor='name'>Имя</label>
            <input type='text' name='name'/>

            <label htmlFor='email'>Почта</label>
            <input type='email' name='email' />

            <label htmlFor='message'>Сообщение</label>
            <textarea name='message'></textarea>
            
            <button type='submit'>Отправить</button>
        </form>
        </>
    )
}

export default Contacts