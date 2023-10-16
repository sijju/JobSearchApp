import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import {checkImageURL} from '../../../utils'
const Company = ({companyName,companyLogo,jobTitle,Location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{
          uri: checkImageURL(companyLogo) ? companyLogo : 'https://img.freepik.com/free-photo/coins-job-word_23-2148568014.jpg?w=1060&t=st=1694373553~exp=1694374153~hmac=95bcd1ba4f33d633544584d008ae250305a42f4510432a9bb7a238d02bf320f3'
        }} style={styles.logoImage} />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} resizeMode='contain' style={styles.locationImage} />
        </View>
        <Text style={styles.locationName}>{Location}</Text>
      </View>
    </View>
  )
}

export default Company