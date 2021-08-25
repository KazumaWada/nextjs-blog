import Link from 'next/link'

export default function Tag(){
    return(
        <div>
            <span><Link href='/tag/tag.id'>#something</Link></span> <span>#something</span> <span>#something</span> <span>#something</span>
        </div>
    )
}