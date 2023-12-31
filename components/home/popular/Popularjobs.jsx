import React, { useState } from 'react'
import { View, Text,TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import useFetch from '../../../hook/useFetch'
import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { SIZES } from '../../../constants'
const Popularjobs = () => {
  const router = useRouter()
  const {data,error,isLoading} = useFetch('search',{
    query:'React Developer',
    num_pages:1
  })

  const [selectedJob,setSelectedJob] = useState()

  const handleCardPress = (item) =>{
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id)
  }
  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text>Something Went Wrong !!!</Text>
        ) :(
          <FlatList data={data} renderItem={({item})=>(
              <PopularJobCard item={item} selectedJob={selectedJob} handleCardPress={handleCardPress} />
          )} keyExtractor={item =>item.job_id} contentContainerStyle={{columnGap:SIZES.small}} horizontal/>
        )}
      </View>
    </View>

  )
}

export default Popularjobs