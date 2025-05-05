import characters from '../data/characters';

export default function Card({ name, onClick }: { name: string, onClick: ()=>void }) {
  
  return (
    <div className="w-[300px] h-[500px] border border-black" onClick={onClick}>
      <img src={characters.get(name)} className="h-full w-full object-cover"/>
    </div>
  )
}
