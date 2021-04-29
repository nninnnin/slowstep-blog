import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import App from "@components/App";

const Container = styled.div`
  text-align: center;
`;

function Index () {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const ev = document.addEventListener('scroll', (e) => {
      console.log(window.scrollY);
    });

    return () => {
      document.removeEventListener('scroll', ev);
    };
  }, [scrollPosition]);

  return (
    <App>
      <Container>
        <h1 lang="en">Slow step.</h1>

        <p>
          거기서 뭐해요?<br/>
          누구요, 저요?<br/>
          네..당신 말고 여기 아무도 없어요. <br/>
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, distinctio velit tenetur numquam, eligendi qui asperiores quasi a pariatur ea tempora optio corrupti nostrum deleniti beatae consectetur molestiae ipsum earum? Ullam, eos adipisci maxime rem repudiandae id quibusdam eveniet atque nam facilis neque repellat excepturi ratione voluptas quaerat nisi mollitia natus dolorum unde in? Facilis eius sint tenetur id quas sequi consequatur quasi accusamus dolor repudiandae, quibusdam voluptatem mollitia, in aperiam distinctio commodi veniam deserunt quod laudantium adipisci! Hic illo animi nisi quam? A impedit fugiat laboriosam vero suscipit minima, optio beatae earum aperiam molestiae, veniam magni facere ad sapiente, iusto ipsam. Nostrum incidunt tempora maxime optio sed. Reiciendis, praesentium cum cumque in facere culpa neque asperiores cupiditate nobis eum vel, eos odio, quae corrupti voluptatibus voluptas vero iste repudiandae officiis accusantium. Neque voluptate quaerat ab incidunt maxime ipsa ducimus veniam iusto facilis deleniti a vitae ut, placeat praesentium reprehenderit odit doloribus consequuntur quas eius, voluptatibus omnis aut? Impedit error maiores neque vero voluptates obcaecati eveniet distinctio pariatur ex nostrum. Animi assumenda dolores ratione minima quisquam illo itaque modi dolorum deserunt, eaque sit aspernatur blanditiis vero, repellendus, voluptas necessitatibus pariatur repellat quibusdam. Similique, impedit. Id beatae ab, dolores quam nobis nam deleniti odio recusandae ad nulla facilis eum voluptatum animi nisi maiores, nihil modi officiis vero reprehenderit aliquam illum voluptatibus consequatur. Eius molestias explicabo amet, velit dolores ipsa ut fugit ad suscipit doloremque debitis veritatis aut voluptatem dignissimos tempora magni omnis iure beatae, cupiditate deserunt eligendi odio? Eos inventore dolores vitae sapiente ab tempora voluptatibus aliquid quas ex, optio exercitationem, voluptas suscipit impedit aperiam veritatis similique architecto velit nam quos! Quia totam sit qui, necessitatibus mollitia repudiandae atque corporis veniam? Veniam sint autem nulla, consequatur cupiditate laboriosam. Numquam, cupiditate. Voluptates architecto, id, aperiam in doloribus voluptate labore adipisci ut, pariatur esse est? Vitae modi architecto suscipit ipsa, quas veniam molestiae. Porro quae cumque autem rem ad unde tenetur dolorum cupiditate expedita voluptatem. Soluta velit dolorem veritatis adipisci doloremque reprehenderit ab accusamus beatae iste saepe quam eaque consequuntur molestiae et necessitatibus voluptatibus amet, quae voluptatem pariatur obcaecati porro! Autem, at libero! Corrupti dolor velit illo, recusandae quaerat fugiat veritatis tenetur fuga aut expedita laboriosam enim incidunt, maxime, cupiditate facere id cum maiores! Pariatur sit vel velit est repudiandae voluptatem aliquid animi nemo quia neque consequuntur nostrum corporis quas, delectus facere tempore numquam quis illo laborum? Sed vel commodi iste qui dolorum quaerat consequatur, sint porro dignissimos nesciunt necessitatibus et unde officia fugit, sapiente obcaecati! Sed, eum? Aspernatur impedit atque obcaecati quo neque dolores ut quasi harum, magni delectus, aliquam laborum nesciunt quam nihil inventore aliquid tempore praesentium velit accusantium assumenda officiis voluptatem? Quidem molestias sunt laudantium consequuntur beatae odio tempora facilis vitae optio saepe, in, delectus necessitatibus dolores magni itaque, at eveniet. Deserunt earum sequi laborum quibusdam ipsum repellat. Suscipit in pariatur quasi deleniti perspiciatis repudiandae nemo rem nesciunt officiis animi, alias voluptate dolore dolor nulla a modi nisi excepturi recusandae consequatur omnis doloribus necessitatibus sint nam praesentium. Facere, sunt. Molestiae repellendus exercitationem modi facilis iure aspernatur, fugit itaque provident rem? Similique odit impedit consequuntur aspernatur veritatis sit? Similique, neque? Vitae accusantium ipsum iste magni pariatur. Similique quae illum, maiores, dignissimos fuga dolor itaque repudiandae hic quo soluta voluptate eveniet veniam officiis iusto, molestiae odit animi molestias libero numquam a dolore non ratione iure vel. Perspiciatis vero consequatur sapiente ipsam adipisci eius quidem deleniti sit, inventore nostrum dolores sint, libero voluptatum consectetur eum quos? Quidem magni temporibus sequi harum ratione beatae expedita laudantium tempora possimus quos accusamus architecto impedit blanditiis recusandae natus, labore vero maiores asperiores totam modi velit facere. In id voluptates reprehenderit quos sint voluptas ea alias quaerat. Perferendis error temporibus, animi, necessitatibus vero illo sed quibusdam inventore quo libero laboriosam labore natus quis sunt minus pariatur eveniet commodi dolores id? Ipsum expedita repellendus voluptatum a dolores. Consequatur culpa quis ipsum nemo, excepturi voluptate adipisci dicta a enim modi hic ipsa natus possimus optio facilis accusamus vitae incidunt at eaque obcaecati fugit? Nesciunt molestias temporibus explicabo, numquam aperiam quisquam veritatis ut deleniti odit natus minima et dolores perspiciatis in debitis ipsa quas maxime harum recusandae reiciendis rerum iure voluptatibus excepturi! Atque possimus doloribus vel totam nemo iure ipsa labore soluta quod natus, hic temporibus aspernatur voluptas ullam provident alias quibusdam ipsum itaque velit, fugiat iusto exercitationem magnam nisi dolorem. Unde accusantium neque asperiores sapiente, dignissimos eveniet tenetur sit temporibus, ipsum, soluta quo autem fugit deserunt doloremque! Modi assumenda atque nisi adipisci doloremque, dignissimos voluptas natus inventore, rem esse blanditiis fuga optio at nobis alias distinctio ipsam odit explicabo itaque quaerat deleniti facere nostrum illo? Incidunt suscipit accusamus at magnam reiciendis facilis! Cupiditate mollitia perferendis ipsam quam ex, sapiente aliquam, provident exercitationem aliquid, nostrum officiis. Incidunt neque pariatur debitis corrupti laborum deleniti libero fuga necessitatibus ut animi illum et error natus tempore architecto, perspiciatis laudantium autem cumque soluta perferendis iste corporis fugit odio. Atque dolore asperiores doloribus illo omnis labore placeat assumenda repellendus magni, cumque illum earum nemo similique, aut dolores laborum consequuntur vel. Cumque, quas nemo quis aspernatur earum sapiente, odio nam perspiciatis ea inventore perferendis laboriosam optio expedita nihil praesentium. Non vero dolorem ex voluptate quo illum maxime labore cupiditate? Error totam, perferendis corrupti itaque molestiae delectus ipsa, repellendus magni laboriosam quas saepe ad perspiciatis ipsum similique debitis ullam illo nisi reiciendis doloribus tempora fugiat soluta! Quae officiis dolore culpa, obcaecati vel soluta saepe tenetur dicta minima eius sed est doloremque, quod voluptatem architecto temporibus reprehenderit quas explicabo distinctio ad eligendi ut aliquam. Ratione exercitationem deleniti minus eligendi aperiam sed nemo, cum iure maiores soluta expedita itaque aliquid esse minima saepe, consequuntur nobis consequatur, maxime officiis quod unde fugit? Cumque sed repellat eum, provident numquam culpa, dignissimos quibusdam, temporibus id minima eligendi nulla iure quos ipsum. Veritatis odio voluptatibus, commodi labore ratione iste quos nesciunt earum debitis voluptatem deleniti, necessitatibus, temporibus odit delectus rem sapiente modi ex! Possimus voluptates, officia nesciunt qui, vero numquam obcaecati, veniam dolore rerum consequuntur odio dignissimos nostrum nisi quibusdam temporibus sapiente esse! Libero.
        </p>

        <p>
          Welcome to slow step.
        </p>
      </Container>
    </App>
  );
}

export default Index;
