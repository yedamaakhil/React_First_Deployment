export default function Bootstrap(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Cricketers</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>

        <div style={{display:"flex",padding:"30px",gap:"25px"}}>
            <div class="card text-bg-dark">
            <img src="https://i.pinimg.com/736x/49/14/e5/4914e594b9401731369893e0d9028ae7.jpg" class="card-img" alt="..."/>
            <div class="card-img-overlay">
                <h3 class="card-title">Rohith Sharma</h3>
                <h5 class="card-text"><small>HitMan💀</small></h5>
            </div>
            </div>
            <div class="card text-bg-dark">
            <img src="https://mxp-media.ilnmedia.com/media/content/2021/Aug/RTR2JSO9_6127a60bf2cfb.jpeg" class="card-img" alt="..."/>
            <div class="card-img-overlay">
                <h3 class="card-title">Sachin Tendulkar</h3>
                <h5 class="card-text"><small>Goat🐐</small></h5>
            </div>
            </div>
            <div class="card text-bg-dark">
            <img src="https://w0.peakpx.com/wallpaper/196/34/HD-wallpaper-virat-kohli-in-blue-jersey-virat-kohli-blue-indian-cricket-king-kohli-sports.jpg" class="card-img" alt="..."/>
            <div class="card-img-overlay">
                <h3 class="card-title">Virat Kohli</h3>
                <h5 class="card-text"><small>King👑</small></h5>
            </div>
            </div>
            <div class="card text-bg-dark">
            <img src="https://i.pinimg.com/736x/2e/2e/e5/2e2ee5d4fb3fceb412c85b9f0fe6fe63.jpg" class="card-img" alt="..."/>
            <div class="card-img-overlay">
                <h3 class="card-title">Ms Dhoni</h3>
                <h5 class="card-text"><small>Captain Cool🧊</small></h5>
            </div>
            </div>
        </div>
        </>
    )
}