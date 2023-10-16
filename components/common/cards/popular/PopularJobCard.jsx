
import { View, Text,TouchableOpacity,Image } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './popularjobcard.style'

const PopularJobCard = ({item,selectedJob,handleCardPress}) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob,item)} onPress={()=>handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
          <Image source={{uri : checkImageURL(item.employer_logo)
          ? item.employer_logo : 'https://img.freepik.com/free-photo/coins-job-word_23-2148568014.jpg?w=1060&t=st=1694373553~exp=1694374153~hmac=95bcd1ba4f33d633544584d008ae250305a42f4510432a9bb7a238d02bf320f3'}} resizeMode='contain' style={styles.logoImage} />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.jobName(selectedJob,item)}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard