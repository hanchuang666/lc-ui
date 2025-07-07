import {defineComponent, ref} from "vue";
// import {LRadioGroup, LRadio} from 'lc-ui'

export default defineComponent({
    name: 'Radio',
    setup: () => {
          const modelValue = ref('c')

      const handleUpdate = (value: any) => {
        console.log('更新了', value);
        modelValue.value = value
      }
        return () => {
          return (
            <>
              {modelValue.value}
              <l-radio-group
                modelValue={modelValue.value}
                onChange={handleUpdate}
              >
                <l-radio value='a' label="选项一"></l-radio>
                <l-radio value='b' label='选项二'></l-radio>
                <l-radio value='c' label='选项三'></l-radio>
                <l-radio value='d' label='选项四'></l-radio>
              </l-radio-group>
              <br/>
              <l-radio-group
                modelValue={modelValue.value}
                direction={'vertical'}
                onChange={handleUpdate}
              >
                <l-radio value='a' label={'选项一'}></l-radio>
                <l-radio value='b' label={'选项二'}></l-radio>
                <l-radio value='c' label={'选项三'}></l-radio>
                <l-radio value='d' label={'选项四'}></l-radio>
              </l-radio-group>
            </>

          )
        }
    }
})