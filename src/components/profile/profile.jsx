function Profile() {
    return (
        <div className='profile-wrapper'>
            <div className='profile_bg'>
                <img src="https://a.d-cd.net/7628969s-960.jpg" alt="" />
            </div>
            <div className='profile-info_wrapper'>
                <div className='avatar'>
                    <img src="https://bipbap.ru/wp-content/uploads/2017/11/7866.jpg" alt="" />
                </div>
                <div className='profile-info'>
                    <h3 className='name'>Kamaz Galimov</h3>
                    <h6>О себе:</h6>
                    <ul>
                        <li>
                            Status: <span>Никогда не сдавайся пока сдаёшься и ты сдашься, но не сдашься. (с) Альберт Эйнштейн</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile;