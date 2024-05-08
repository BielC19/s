import 'bootstrap/dist/css/bootstrap.css'
import './targetes.css'

interface Props {
    titol: string[];
    text: string[];
    link?: string[];
    linkT?: string[];
    linkimg?: string[];
}

function Card({ titol, text, link = [], linkimg = [], linkT = [] }: Props) {
    const nums = [0,1,2,3,4,5]

    return (
        <>
        {nums.map((i) => 
        <div className="card" >
            <img src={linkimg[i]} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{titol[i]}</h5>
                <p className="card-text">{text[i]}</p>
                <a href={"#" + link[i]} id={"#" + link[i]} className="btn btn-primary">{'+ ' + linkT[i]}</a>
            </div>
        </div>
        )}
        </>
    )
}


export default Card