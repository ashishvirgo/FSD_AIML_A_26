import Item from "./Item";
const Home = () => {
  const itemData=[
    {image:"",title:"ReactJS",price:465},
    {image:"",title:"NodeJS",price:375},
    {image:"",title:"ExpressJS",price:519},
    {image:"",title:"ReactJS",price:465},
    {image:"",title:"NodeJS",price:375},
    {image:"",title:"ExpressJS",price:519},
  ];
  return (
    <div className="home">
      {
       itemData.map((item,index)=>{
          return <Item key={index} props={item}/>
       })
      }
    </div>
  )
}

export default Home
