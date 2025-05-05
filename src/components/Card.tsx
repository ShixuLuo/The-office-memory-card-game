import characters from '../data/characters';

const BASE_URL = import.meta.env.BASE_URL;

export default function Card({ name, onClick }: { name: string, onClick: ()=>void }) {
  console.log(BASE_URL + characters.get(name));
  
  return (
    <div className="w-[300px] h-[500px] border border-black" onClick={onClick}>
      <img src={BASE_URL + characters.get(name)} className="h-full w-full object-cover"/>
    </div>
  )
}
