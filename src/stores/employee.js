import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore('employee', () => {

  const employeeList = ref([]); 
  const loading = ref(true);
  const errorMassage = ref(null)
 
  const employeeCount = computed(() => employeeCount.value.length);

  function setEmployeeList(List){
    employeeList.value = List
  }

  function setLoading(){
    loading.value = false 
  }

  function setErrorMassage(massage){
    errorMassage.value = massage
  }

  return { employeeList, employeeCount, setEmployeeList, setLoading, setErrorMassage, loading , errorMassage}