import logo from '../assets/Logo.svg'

function Footer() {

    return (

        <div className='text-[arial] w-full fixed bottom-0 z-50 bg-white shadow-sm border-t border-gray-800'>
            <div className="grid lg:grid-cols-4 items-center md:grid-cols-2 grid-cols-1 p-4">
                <div>
                    <div>
                        <img className='w-22' src={logo} alt="ventura logo" />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Non in bibendum et ut.
                        </p>
                    </div>
                    <div></div>
                </div>
                <div>3</div>
                <div>4</div>
                <div>7</div>
            </div>




            <div></div>
        </div>

    )

}


export default Footer