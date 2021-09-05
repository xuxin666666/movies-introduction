import { Spin, Alert } from 'antd';
import "antd/dist/antd.css";
import MovieItem from './MovieItem.jsx';
import '../css/movieIntro.css';
import { Divider, Anchor } from 'antd';
import React from 'react';
import axios from 'axios'

const { Link } = Anchor;

export default class MovieIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movies: []
        };
    }

     async componentDidMount() {
        // const data = require("../json/app.json");
        // setTimeout(() => {
        //     this.setState({
        //         movies: data.subjects,
        //         isLoading: false
        //     })
        // }, 500)
        const {data} = await axios.get('/intro')
        data.forEach(item => {
            for(let i in item){
                item[i.toLowerCase()] = item[i]
                delete item[i]
            }
        })
        this.timer = setTimeout(() => {
            this.setState({
                isLoading: false,
                movies: data
            })
        }, 500)
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    handleAnchorClick = (e,link) => {
        e.preventDefault();
    };

    render() {
        return <div>
            {this.mycontext()}
        </div>
    }

    mycontext = () => {
        if (this.state.isLoading) {
            return <Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>
        } else {
            return <div>
                <Anchor className="anc" onClick={this.handleAnchorClick}>
                    <Link href="#h1" title="1 魁拔" />
                    <Link href="#plu1" title="2 基本信息" />
                    <Link href="#plu2" title="3 故事介绍" />
                    <Link href="#plu3" title="4 剧情设定" >
                        <Link href="#h31" title="4.1 上篇" />
                        <Link href="#h32" title="4.2 中篇" />
                        <Link href="#h33" title="4.3 下篇" />
                    </Link>
                    <Link href="#plu4" title="5 播出信息" />
                    <Link href="#plu5" title="6 动画音乐" />
                </Anchor>
                <Divider type="vertical" id="plu0" />
                <div id="div0">
                    <div id="div01">
                        <img src='image/timg.jpg' alt="" id="img1" />
                        <h1 id="h1">魁拔</h1>
                        <p>《魁拔》是由北京青青树动漫科技有限公司于2011年开始推出的由王川执导的国产奇幻动画系列大电影。</p>
                        <p>作品围绕主人公蛮吉等人，讲述了在架空的世界——元泱界中，天地两界共同合力对抗每隔333年诞生的可怕异常生命——魁拔的故事。</p>
                        <table>
                            <tbody>
                                <tr><td className='t1'>类型</td><td className='t2'>冒险，动作，奇幻，剧情</td></tr>
                                <tr><td className='t1'>导演</td><td className='t2'>王川等</td></tr>
                                <tr><td className='t1'>中文名</td><td className='t2'>魁拔</td></tr>
                                <tr><td className='t1'>原版名称</td><td className='t2'>灵山王</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <Divider orientation="left" id="plu1">基本信息</Divider>
                    <img src='image/message.png' alt="" id="img2" />
                    <Divider orientation="left" id="plu2">故事介绍</Divider>
                    <div id="div2">
                        <img src='image/14ce36d3d539b600a40a89d3e350352ac75cb78a.png' alt="" id="img3" />
                        <p>平静安详的元泱境界，每隔333年，总会有一个神秘而恐怖的异常生物重生，它就是魁拔！魁拔的每一次出现，都会给元泱境界带来巨大的灾难！即便是天界的神族，也在劫难逃。在天地两界各种力量的全力打击下，魁拔一次次被消灭，但又总是按333年的周期重新出现。魁拔纪元1664年，天神经过精确测算后，在第六代魁拔苏醒前一刻对其进行毁灭性打击。但谁都没有想到，由于一个差错导致新一代魁拔成功地逃脱了致命一击。很快，天界魁拔司和地界神圣联盟均探测到了魁拔依然生还的迹象。因此，找到魁拔，彻底消灭魁拔，再一次成了各地热血勇士的终极目标。</p>
                        <p>在偏远的兽国窝窝乡，蛮大人和蛮吉每天为取得象征成功和光荣的妖侠纹耀而刻苦修炼，却把他们生活的村庄搅得鸡犬不宁。村民们绞尽脑汁把他们赶走。一天，消灭魁拔的征兵令突然传到窝窝乡，村长趁机怂恿蛮大人和蛮吉从军参战。然而，在这个一切都凭纹耀说话的世界，仅凭蛮大人现有的一块杂牌纹耀，不要说参军，就连住店的资格都没有。受尽歧视的蛮吉和蛮大人决定，混上那艘即将启程去消灭魁拔的巨型战舰，直接挑战魁拔，用热血换取至高的荣誉。</p>
                    </div>
                    <div id="div3" style={{float: 'right'}}>
                        <div>
                            {this.state.movies.map(Item => {
                                return <MovieItem {...Item} key={Item.id} history={this.props.history}></MovieItem>
                            })}
                        </div>
                    </div>
                    <div id="div4">
                        <Divider orientation="left" id="plu3">剧情设定</Divider>
                        <div id="div5">
                            <p>这段介绍旨在用最简短的语言包含最丰富的信息量，囊括魁拔系列剧情设定大部分主要信息。因为魁拔系列设定和故事宏大，很多人可能没有精力或兴趣了解，从而错过魁拔。</p>
                            <p>这份总结信息，意在普及魁拔信息，甚至让不了解魁拔的人直接看懂即将上映的《魁拔四之梅零落》。</p>
                            <h3 id="h31">上篇</h3>
                            <p>元泱境界包含平行的天地两界。魁拔前72年两界首次接触。天界更为文明，时间流速慢于地界。其居民自称天神，行事遵从理性思维。天神分为镜、朴、泱、焰、尘五系（对应五行，每系有一位主神）和至高神“元”。“元点”是天界的能量核心。</p>
                            <p>地界已知有十一国，分别为神圣树国（辉妖）、风国（基斯卡人）、龙国（龙族）、商国（默拓人）、兽国（兽族）、翼国（翼族）、雪国（萨库人）、夜国（雾妖）、海国（粼妖）、沙国（格洛莫赫人）和虫国（蛰族），前十国共同组成神圣联盟。</p>
                            <p>脉是一种振动，是万物的组成。人体有十二脉门，通过脉门引动空气中的脉可以形成脉术。</p>
                            <p>曲境是平行空间间的通道。纹耀则是曲境的碎片，多种多样，既代表持有者社会地位，又可在其使用脉术时增幅力量。</p>
                            <h3 id="h32">中篇</h3>
                            <p>魁拔是拥有超强力量的恐怖生物，在魁拔元年首次出现，后每隔333年在神圣兽国的灵山诞生一次。他们有男有女，生来与常人无异，不知道自己是谁。其宿命即为用战争打破等级分明的纹耀制度。</p>
                            <p>初代魁拔在兽国造成了很大破坏，后被焰神所杀。</p>
                            <p>二代魁拔用掠夺的纹耀铸造了冲天槊，使焰神与其同归于尽。</p>
                            <p>三代魁拔没有出现在世人面前。</p>
                            <p>第四代魁拔迷麟少年时随导师爪云统一灵山，并在爪云归国途中组建“灵山军”。爪云死后，魁拔闯西取得冲天槊，之后发动世界性战争，大胜。天神参战予以元点打击，迷麟逃脱后失踪，其间邂逅爱人梅零落（疑为尘神）。“十六队”（ 后一失忆天神加入）被灵山军派出寻找迷麟，但遭天神囚禁。其后灵山军接连战败，决战前魁拔归来，并在战死前用冲天槊打通空间。冲天槊和其仅存的部下（十二妖）一同落到六百年后的涡流岛。</p>
                            <p>五代魁拔出生即遭元点打击致死。</p>
                            <p>十二妖包括基斯卡人奇衡三、雾妖幽弥狂、萨库人大仓、粼妖海问香、兽族燃谷、格洛莫赫人幽若离、蛰族吧咕哒、默拓人万两、翼族雷光、辉妖秋落木和龙族的卡拉肖克·玲、梅龙尼卡·嘉，他们守护冲天槊，等待魁拔，年龄不再增长。秋落木现已离岛，成为树国监国苍梧。</p>
                            <h3 id="h33">下篇</h3>
                            <p>卡拉肖克·潘是神圣龙国卡拉肖克家族的继承人，按照龙国传统应在魁拔复活年接管全国军权。长期掌管龙国军权的两大家族于是编造罪名，迫使潘流亡国外。</p>
                            <p>神圣兽国的职业武者——雪伦雪伶兄妹因从杀手手中救下潘而遭追杀。三人由此相识并参与了兽国的革命运动。</p>
                            <p>因为神圣树国政局动荡，年幼的公主离离艾逃到兽国避难。复活的第六代魁拔逃过天神打击，被兽国青年蛮小满收养，取名蛮吉。迫于生活，离离艾和蛮小满相识并同居，两人还因学习脉术和雪伦成为同学。之后离离艾被树国派人带回，蛮小满遂带蛮吉搬到窝窝乡居住。</p>
                            <p>神圣风国监测到魁拔未死，认为其可能在涡流岛，通知联盟集结大军乘船前往。蛮吉和蛮小满也加入其中。雪伦、天神镜心和神秘少年敖江中途加入联军助阵。蛮吉等人在元泱界滩头与奇衡三、幽弥狂大战 ，在迷离谷与大仓、海问香大战，击杀四人。舰长远浪发现蛮吉为魁拔。</p>
                            <p>十二妖残众趁联军在迷离谷休整时发动突袭，敖江带镜心作为人质前往十二妖住处（后来两人逃离）。十二妖读取镜心记忆，推测蛮吉为魁拔。</p>
                            <p>基斯卡王权平八从天神焰赤处获知魁拔脉频读数，发现蛮吉身份，两人火速前往涡流岛诱捕蛮吉。远浪与十二妖联手对其施救。激斗中蛮吉和雷光被迫离开涡流岛，并摆脱了追捕。</p>
                            <p>潘因被通缉未能登船，之后遭到树国逮捕。离离艾借押送潘为由来到龙国，暗中寻找前往涡流岛的方法。</p>
                            <p>蛮吉和雷光再次摆脱追捕，来到神圣海国，与粼妖联合抵御第三波追捕。</p>
                        </div>
                        <Divider orientation="left" id="plu4">播出信息</Divider>
                        <p>2011年7月8日，《魁拔之十万火急》正式公映。由于事先推广工作不到位，导致大量电影院未给予排片或排片较少。而宣传工作的匮乏也导致该作品在观众群中的知名度也偏低，最终票房只有惨淡的350万元。然而由于影片本身扎实的制作与精细的画工，打破了观众对国产动画的固有印象，使得影片在观看者中受到了极高的评价，业内人士甚至把《魁拔》称为“业界的良心之作”，粉丝们则称其为“中国动漫的希望” ，豆瓣网上对该片的评分更是一度高达8.0/10分。姚晨、王凯、徐小平、史航、李承鹏、胡歌等众多微博名人也纷纷在微博上为《魁拔》鼓劲。该片导演王川也表示：无论票房如何，这个系列都会继续做下去。</p>
                        <p>2013年5月31日，系列的第二部剧场版《魁拔之大战元泱界》（以下简称《魁拔2》）公映，上映首周3天即收获了1835万元的票房，最终总额为2483万元人民币。《魁拔2》亦得到韩寒、陆川、何平、黄晓明、佟大为、鹦鹉史航、阿忆、张颐武、尹鸿、周星等娱乐、文化界名人的大力赞赏。</p>
                        <p>2014年4月1日，发行商万达影业宣布了《魁拔3》的上映时间为2014年10月1日。在第十届中国国际动漫节“金猴奖”颁奖礼上，《魁拔3》还未上映就已备受肯定，获得了最具潜力动画电影奖。</p>
                        <Divider orientation="left" id="plu5">动画音乐</Divider>
                        <img src='image/bcgmuc.png' id="img4" alt="" />
                    </div>
                </div>
            </div>
        }
    }
}