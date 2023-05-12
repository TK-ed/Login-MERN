import '../navbar/nav.css'

const Navbar = () => {
    return (
        <div>
            <br></br>
            <h1>The Metaverse Explorer!!</h1>
            <hr style={{height: '1px',
            width: '50%',
            backgroundColor: 'black',
                    }}></hr>
                    <br></br>
            <nav className="tiles">
                <a href="/" style={{
                    border: '2px solid',
                    cursor: 'pointer',
                    color: 'black',
                    backgroundColor: 'turquoise',
                    spacing: '10px',
                    padding: '10px 10px'
                }}>Home</a>  
                <a href="/community" style={{
                    border: '2px solid',
                    cursor: 'pointer',
                    color: 'black',
                    backgroundColor: 'turquoise',
                    spacing: '10px',
                    padding: '10px 10px'
                }}>Community</a>
                <a href="/resources" style={{
                    border: '2px solid',
                    cursor: 'pointer',
                    color: 'black',
                    backgroundColor: 'turquoise',
                    spacing: '10px',
                    padding: '10px 10px'
                }}>Resources</a>
                
            </nav>
        </div>
    );
}
    

export default Navbar;