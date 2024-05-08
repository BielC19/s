import './Cat.css'
import img1 from './images.png'
import img2 from './images1.png'
import img3 from './fto3.png'
import img4 from './images2.png'
import img5 from './images5.png'
import img6 from './fto4.png'
import Card from './targetes'
import Bio from "./bio";

const titols = ['Biografia', 'Context Històric', 'Tema', 'Forma', 'Anàlisi Figures Retòriques', 'Sintsi']
const textos = ['Gabriel Ferrater i Soler, poeta i crític català, és recordat principalment per la seva obra poètica, especialment el llibre Les dones i els dies (1968). A més, va ser un lingüista i crític literari que va deixar una empremta significativa en la literatura catalana contemporània.', 'El poema "Cambra de Tardor" de Gabriel Ferrater i Soler, publicat l\'any 1962, representa la resistència cultural i la preservació de la llengua catalana durant el règim de Franco, tot destacant Ferrater com el primer poeta modern de la literatura catalana de postguerra.', 'El poema "Cambra de Tardor" de Gabriel Ferrater i Soler és una reflexió melancòlica sobre el pas del temps, l\'amor i la decadència, simbolitzada per una cambra íntima on dos amants es troben, aïllats però conscients del món exterior.', 'L\’obra de Ferrater i Soler és un poema contínu de vint-i-tres versos decasíl·labs, amb excepcions, que no segueix una estructura d’estrofes tradicionals ni una rima específica, aportant així al seu estil distintiu.', 'El poema "Cambra de Tardor" utilitza una varietat de figures retòriques com metàfores, al·literacions, asíndetons, anàfores, personificacions i paradoxes per enriquir la seva expressió i aprofundir en la temàtica de la tardor i l\'amor.', 'El poema "Cambra de Tardor" de Gabriel Ferrater, famós per la seva complexitat i ús de figures retòriques, explora temes d\'amor passat i tristesa a través d\'un diàleg en una cambra on es reviuen records.']
const linkimgs = [img2, img1, img3, img4, img5, img6]
const links = ['bio', 'conhis', 'tem', 'form', 'AnalFigRet', 'sin']
function Cat() {
  
  return (
    <div>
      <div className='cat'>
        <h1>CAMBRA DE TARDOR,<br /> GABRIEL FERRATER I SOLER</h1>
        <h5></h5>
      </div>
      <br />
      <div className="hhaaaahha">
      <div className='targetes'>
        <Card titol={titols} text={textos} link={links} linkT={titols} linkimg={linkimgs} />
      </div>
      <hr />
      <div className="bioses">
        <Bio ClN={links[0]}>
          <h4>Gabriel Ferrater i Soler</h4>
          <p className={links[0]}>
              Va néixer el <b>20 de maig de 1922 a Reus i va morir a Sant Cugat del Vallès el 27 d’abril de 1972</b>. Va ser un poeta, crític, traductor i lingüista català. Va ser el primer poeta modern de la literatura catalana de postguerra i el que més influí en la joventut i els poetes posteriors.
                <br />
              Va tenir els primers contactes amb les lletres en l’àmbit familiar perquè no va anar a l’escola fins als deu anys. Aquesta situació escolar poc regular li va permetre aprendre a llegir en anglès i en alemany i descobrir a grans autors contemporanis com James Joyce, André Gide, Ernst Jünger i Henry de Montherlant.
                <br />
              El seu llibre més important és <span className='italic'>Les dones i els dies (1968) </span>. La seva obra poètica, escrita en català, és de aparició tardana i, tot i que breu, manifesta una plena maduresa.
                <br />
              Va ser especialista en matemàtiques i en lingüística, crític literari i artístic, i és autor d'una interessant obra poètica, marcada per la seva oposició a la poesia romàntica.
          </p>
        </Bio>
        <hr />
        <Bio ClN={links[1]}>
          <h4>{titols[1]}</h4>
          <p>
            El poema "Cambra de Tardor" de Gabriel Ferrater i Soler es va publicar <b>l'any 1962 com a part del recull de poemes "Menja't una cama"</b>. Gabriel és conegut com el<b> primer poeta modern de la literatura catalana de postguerra</b>. Aquesta època es caracteritza per la recuperació cultural i literària després de la Guerra Civil Espanyola. 
              <br />
            Durant aquest temps, Catalunya i Catalunya Espanya estaven <b>sota el règim de Franco</b>. La censura i la repressió cultural eren presents, especialment envers les llengües i cultures no castellanes. Tot i això, Gabriel altres escriptors catalans van continuar produint obres significatives, contribuint a la resistència cultural i a la preservació de la llengua catalana. 
              <br />
            Gabriel és conegut per la seva poesia profundament personal i introspectiva, sovint reflexionant sobre temes com l'amor, el pas del temps i les experiències de la vida quotidiana.
          </p>
        </Bio>
        <hr />
        <Bio ClN={links[2]}>
          <h4>{titols[2]}</h4>
          <p>
            El poema tracta principalment sobre <b>la melancolia del pas del temps</b>, que cobreix els instants amorosos i diu que els enterra en l’oblit. També parla del plaer i de la memòria del plaer, essència de la seva manera de concebre el món, en què la passió i la lucidesa estan juntes i es confronten.
              <br />
            El poema es centra en l’experiència personal de Gabriel: les vivències de jove, les experiències amoroses, el pas del temps. La “Cambra de Tardor” és <b>l’espai íntim on es troben dos amants</b>. Aquesta cambra es convertirà, en el record dels protagonistes, en el símbol de la relació amorosa que han mantingut. La cambra és de tardor, una metàfora que ens fa creure que ens trobem davant d’una relació decadent, probablement a punt d’acabar. El poema comença amb la descripció d’una persiana mig tancada, un element que aïlla els amants del món exterior però que al mateix temps, no els aïlla del tot perquè poden veure la llum, prendre l’aire, i notar com passa el temps.
          </p>
        </Bio>
        <hr />
        <Bio ClN={links[3]}>
          <h4>{titols[3]}</h4>
          <p>
            Aquesta obra no està escrita en prosa, sinó <b>en poesia</b>. El poema està compost per versos <b>decasíl·labs</b>, amb l’excepció del primer vers, el catorzè i el penúltim. En lloc de dividir-se en estrofes tradicionals, el poema està escrit de manera contínua, els <b>vint-i-tres versos</b>. A més, els versos, tot i que segueixen una estructura sil·làbica, no tenen cap classe de rima, així que es pot dir que tenen una <b>rima blanca</b>. Aquesta estructura única contribueix a l’estil distintiu de Ferrater i Soler.
          </p>
        </Bio>
        <hr />
        <Bio ClN={links[4]}>
          <h4>{titols[4]}</h4>
          <p>
            El poema “Cambra de Tardor” conte una varietat de figures retòriques per aprofundir en la seva temàtica i enriquir la seva expressió.
            <ol>
              <li>Les metàfores hi són quan fa la descripció de la tardor, donant vida com si fos una cambra plena de records i sentiments, un exemple es quan diu "la llum, que era color de mel, i ara és color d’olor de poma", que utilitza la metàfora per descriure <b>el canvi de llum a la tardor.</b></li>
              <li>Les al·literacions, per la seva banda, aporten un ritme i una musicalitat al poema, ja que actualment <b>s’ha fet una cançó.</b></li>
              <li>Els asíndetons, que al treure conjuncions, donen un ritme més ràpid. Això es pot veure a "Adormides, les fulles dels meus besos van colgant els recers del teu cos", on <b>es treu  la “i” </b>fa un asíndeton.</li>
              <li>Les anàfores, que consisteixen en la <b>repetició d’una paraula</b> o frase al principi de <b>versos consecutius</b>, hi són al poema.Es veu al dir "<b>Que lent el món, que lent el món</b>, que lenta la pena per les hores que se’n van de pressa".</li>
              <li>Les personificacions, que atribueixen qualitats humanes a objectes, un altre cop al dir "la llum, que era color de mel, i ara és color d’olor de poma"<b> està personificant la cambra.</b></li>
              <li>Les paradoxes, que són afirmacions que semblen contradir-se, però que diuen una veritat, i les fa servir Gabriel al fer servir "Adormides, les fulles dels meus besos van colgant els recers del teu cos" la idea de <b>les fulles adormides que encara pengen del cos de l’amant es una paradoxa.</b></li>
            </ol>
          </p>
        </Bio>
        <hr />
        <Bio ClN={links[5]}>
          <h4>{titols[5]}</h4>
          <p>
            En conclusió, és important tenir clar que el poema tracta d'amor passat, per això té parts de tristesa. Un home i una dona estan en una cambra on reviuen situacions passades en una cambra. És un poema bastant elaborat perquè té  moltes figures retòriques i no segueix una estructura concreta, ja que entremig del poema incorpora un petit diàleg. És un dels poemes més famosos de Gabriel Ferrater perquè l'amor era molt important en l’època que va escriure el poema.
          </p>
        </Bio>
      </div>
    </div>
    <footer>
      <h4>Presentacio del poema Cambra de la Tardor de Gabriel Ferrater i Soler feta per Biel Costa Samsó</h4>
    </footer>
    </div>
  )
}

export default Cat