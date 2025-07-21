import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    'en':{
        translation:{
            'homeTitle': "Welcome to the Data Visualization Tool",
            'description': "An interactive dashboard pairs a 2020-24 provincial unemployment bar chart with a 2015-24 gender and age segmented line chart, enabling instant comparison of regional snapshots with decade-long demographic trends.",
            'barChartTitle': "Unemployment Rate across Provinces of Canada from 2020-2024",
            'lineChartTitle': "Unemployment Rate across Gender & Age Groups from 2015-2024",
            'yearSelect': "Select Year:",
            'genderSelect': "Select Gender",
            'ageSelect': "Select Age Group",
            'unemployment_rate': "Unemployment Rate",
            'all_ages': "All Age Groups",
            '15_and_over': "15 years and over",
            '15_to_24': "15 to 24 years",
            '25_to_54': "25 to 54 years",
            '55_and_over': "55 years and over",
            'Total_gender': "All Gender",
            'men': "Men",
            'women': "Women",
            'stu_name': "Student Name",
            'stu_num': "Student Number"


        }

    },

    'fr': {
        translation: {
            'homeTitle': "Bienvenue dans l'outil de visualisation de données",
            'description': "Un tableau de bord interactif associe un graphique à barres des chômeurs provinciaux de 2020 à 2024 avec un graphique linéaire segmenté par genre et âge de 2015 à 2024, permettant une comparaison instantanée des instantanés régionaux avec les tendances démographiques sur une décennie.",
            'barChartTitle': "Taux de chômage dans les Provinces du Canada de 2020-2024",
            'lineChartTitle': "Taux de chômage par sexe et groupe d'âge de 2015 à 2024",
            'yearSelect': "Sélectionnez l'année:",
            'genderSelect': "Sélectionnez le sexe",
            'ageSelect': "Sélectionnez le groupe d'âge",
            'unemployment_rate': "Taux de chômage",
            'all_ages': "Tous les groupes d'âge",
            '15_and_over': "15 ans et plus",
            '15_to_24': "15 à 24 ans",
            '25_to_54': "25 à 54 ans",
            '55_and_over': "55 ans et plus",
            'Total_gender': "Tous les sexes",
            'men': "Hommes",
            'women': "Femmes",
            'stu_name': "Nom de l'étudiant",
            'stu_num': "Numéro d'étudiant"
        }
    },

    'cn': {
        translation: {
            'homeTitle': "欢迎使用数据可视化工具",
            'description': "一个交互式仪表板将 2020 至 2024 年各省失业率的柱状图与 2015 至 2024 年按性别和年龄细分的折线图相结合，能够即时对比各地区的即时情况与十年来的人口结构趋势",
            'barChartTitle': "加拿大各省份2020至2024的年失业率",
            'lineChartTitle': "加拿大各性别和年龄段2015至2024的失业率",
            'yearSelect': "选择年份",
            'genderSelect': "选择性别",
            'ageSelect': "选择年龄段",
            'unemployment_rate': "失业率",
            'all_ages': "所有年龄段",
            '15_and_over': "15岁及以上",
            '15_to_24': "15岁到24岁",
            '25_to_54': "25岁到54岁",
            '55_and_over': "55岁及以上",
            'Total_gender': "全部性别",
            'men': "男",
            'women': "女",
            'stu_name': "学生姓名",
            'stu_num': "学生号码"
        }
    }

}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;