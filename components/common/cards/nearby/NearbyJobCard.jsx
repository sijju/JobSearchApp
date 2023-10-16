
import { View, Text,TouchableOpacity,Image } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({job,handleNavigate}) => {
  return (
   <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{uri : checkImageURL(job.employer_logo) ? job.employer_logo : 'https://img.freepik.com/free-photo/coins-job-word_23-2148568014.jpg?w=1060&t=st=1694373553~exp=1694374153~hmac=95bcd1ba4f33d633544584d008ae250305a42f4510432a9bb7a238d02bf320f3'}} 
        resizeMode='contain' 
        style={styles.logImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
   </TouchableOpacity>
  )
}

export default NearbyJobCard