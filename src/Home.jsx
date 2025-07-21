import { useState } from 'react'
import UnemploymentChart from './UnemploymentChart';
import LineChart from './LineChart';
import { useTranslation } from 'react-i18next';
import './i18n';



export default function Data(){
    const { t, i18n } = useTranslation();
    const [showChart, setShowChart] = useState(false);
    const handleLanguageChange = (lng) => {i18n.changeLanguage(lng);};


    return(
        <>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <h1 className="fw-bold text-black ms-3">Dashboard</h1>
                    <div className="d-flex align-items-center ms-3">
                        <button className='btn btn-outline-dark' onClick={() => handleLanguageChange('en')}>
                            English
                        </button>
                        <button className='btn btn-outline-dark' onClick={() => handleLanguageChange('fr')}>
                            Français
                        </button>
                        <button className='btn btn-outline-dark' onClick={() => handleLanguageChange('cn')}>
                            中文
                        </button>

                    </div>
                </div>
            </nav>

            <div className='mb-2' style={{backgroundColor: 'gainsboro', display: 'flex', flexDirection: "column", justifyContent:'center',alignItems:'center', gap: '1rem'}}>
                <h1 className='text-center'>
                    {t('homeTitle')}
                </h1>
                <p className='text-center'>
                    {t('description')}
                </p>
            </div>
            
        <div className="container" style={{marginBottom: "5rem"}}>
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-auto">
                    {!showChart ? (
                    <button className="btn btn-success" onClick={() => setShowChart(true)}>
                        {t('viewCharts')}
                    </button>) : (
                        <>
                            <UnemploymentChart />

                            <LineChart />
                        </>
                        
                        )}
                </div>
            </div>
        </div>
        
        
            <footer id="Contact" style={{backgroundColor: 'black', color: 'white', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%', marginTop: '150px'}}>
                <div className='text-center'>
                    <p className='text-center'>
                        {t('stu_name')}: Dongshi Li <br/>
                        {t('stu_num')}: 300294775
                    </p>
                </div>
            </footer>

    
        </>
    )
}