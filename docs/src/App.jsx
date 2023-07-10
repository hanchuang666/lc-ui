
import {defineComponent} from 'vue'
import {classNames} from "./utils";
import Header from "./layout/Header.tsx"
import Menu from './components/menu'
import Content from './layout/Content'

export default defineComponent({
  name:'App',
  setup(props){
    const containerClassName = classNames('container')
    return () => (
      <div className={'lc-doc'}>
        <Header />
        <div className={containerClassName}>
          <Menu />
          <Content />
        </div>
      </div>
    )
  }
})