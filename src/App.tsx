import React, { ButtonHTMLAttributes, ImgHTMLAttributes, useRef, useState } from 'react';
import './App.css';
import UserColumn from './components/UserColumn';
import { UserContext } from './hooks/context';
import FloatingElement from './components/FloatingElement';

export type User = {
  name: string | null
}


function App() {
  const [currentUser, setCurrentUser] = useState<User|undefined>();
  const [ rerender, setRerender ] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);

  const onClickSet = () => {
    const nameValue = nameRef.current?.value;
    const roleValue = roleRef.current?.value;
    if(nameValue==''&&roleValue==''){
      setCurrentUser({
        name: null
      })
      return;
    }

    setCurrentUser({
      name: `${nameValue} - ${roleValue}`
    })
  }

  const toggleRerender = () => {
    setRerender(!rerender);
  }

  type compositeButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string
  }

  const CompositeButton: React.FC<compositeButtonType> = ({text, ...rest}) => (
    <button className='m-2 p-2 border-solid border' {...rest}>{text}</button>
  );

  return (
    <UserContext.Provider value={currentUser}>
      <div>
          <div className="flex justify-center items-center">
            <div>Study</div>
            <img className='h-auto max-w-full' loading='lazy' src="https://picsum.photos/200"/>
          </div>
          <div>
            <input ref={nameRef} placeholder='Name' />
            <input ref={roleRef} placeholder='Role' />
            <CompositeButton text={"SET"} onClick={onClickSet}/>
            <CompositeButton text={"Toggle Render"} onClick={toggleRerender}/>
          </div>
          {currentUser && <UserColumn currentUser={currentUser} />}
          <FloatingElement className='absolute bottom-5 right-5'/>
          <div className='floating-center'>Center</div>
        </div>
    </UserContext.Provider>
  );
}

export default App;
