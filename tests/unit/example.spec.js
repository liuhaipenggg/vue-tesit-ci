import { shallowMount } from '@vue/test-utils'
import ToDoList from '@/components/ToDoList.vue'

describe('todolist', () => {
  it('test todolist', () => {
    const wrapper = shallowMount(ToDoList)
    expect(wrapper.vm.toDoText).toBe('')
  })
})
