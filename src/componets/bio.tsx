import 'bootstrap/dist/css/bootstrap.css'
import './bio.css'
import { ReactNode } from 'react'

interface Props{
    children: ReactNode;
    ClN: string;
}

function Bio({ children, ClN }: Props) {

    return (
        <>
        <div id={ClN} className={ClN + ' infos'}>
            {children}
        </div>
        </>
    )
}


export default Bio