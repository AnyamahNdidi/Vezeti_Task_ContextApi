import React, {createContext} from "react"

interface IData {
    id: number;
    title: string;
    price: string;
   
  }

  


type IdataContextType = {
    data: IData[];
    addData: (dataadd: IData) => void;
    // updateTodo: (id: number) => void;
    setData: React.Dispatch<React.SetStateAction<IData[]>>;
    deleteData: (id: number) => void;
    mySeacrh:string;
    setMysearch:React.Dispatch<React.SetStateAction<string>>
    show:boolean;
    setShow:React.Dispatch<React.SetStateAction<boolean>>
    showToggle :() => void;
    
    
  };


export const AppContext = createContext<IdataContextType | null>(null)

export const IdataProvider: React.FC<React.PropsWithChildren> = ({children }) => {


    const [mySeacrh, setMysearch] = React.useState<string>("")
    const [show, setShow] = React.useState<boolean>(false)
    const [data, setData] = React.useState<IData[]>([]);
    const showToggle = () =>{
        setShow(!show)
    }


      const addData = (dataadd: IData) =>{

        const newData : IData = {
                id:Math.random(),
                title: dataadd.title,
                price: dataadd.price
        }

        setData([...data, newData])

      }

      const deleteData = (id: number) =>{
        const alldata = [...data]
        alldata.filter((data) => data.id !== id)
        setData(alldata)
      }


      return (
        <AppContext.Provider value={{data, setData, addData, deleteData, mySeacrh,setMysearch, show, setShow, showToggle}}>
            {children}
        </AppContext.Provider>
      )

}
