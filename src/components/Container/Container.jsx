import { Outlet } from "react-router-dom";
import s from 'components/Container/Container.module.css'

export default function Container() {
  return (
    <div className={s.container}>
      <Outlet/>
    </div>
  )
}