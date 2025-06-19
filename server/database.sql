
CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    grade TEXT,
    clan TEXT,
    affiliation TEXT,
    gender TEXT,
    debut_arc TEXT,
    image_url TEXT,
    item_hint TEXT
);


INSERT INTO characters (name, grade, clan, affiliation, gender, debut_arc, image_url, item_hint) VALUES
-- Main Characters
('Yuji Itadori','No Grade','None','Tokyo Jujutsu High','Male','Cursed Child Arc','/images/itadori.png','Sukuna''s Finger'),
('Megumi Fushiguro','Grade 2','Zenin Clan','Tokyo Jujutsu High','Male','Cursed Child Arc','/images/megumi.png','Divine Dogs'),
('Nobara Kugisaki','Grade 3','None','Tokyo Jujutsu High','Female','Cursed Child Arc','/images/nobara.png','Straw Doll Hammer'),
('Satoru Gojo','Special Grade','Gojo Clan','Tokyo Jujutsu High','Male','Hidden Inventory Arc','/images/gojo.png','Blindfold'),
('Maki Zenin','Grade 1','Zenin Clan','Tokyo Jujutsu High','Female','Fearsome Womb Arc','/images/maki.png','Cursed Tools'),
('Toge Inumaki','Grade 1','Inumaki Clan','Tokyo Jujutsu High','Male','Fearsome Womb Arc','/images/toge.png','Salmon'),
('Panda','Grade 1','None','Tokyo Jujutsu High','Male','Fearsome Womb Arc','/images/panda.png','Core Shift'),
('Yuta Okkotsu','Special Grade','None','Tokyo Jujutsu High','Male','Cursed Child Arc','/images/yuta.png','Katana'),
('Shoko Ieiri','None','None','Tokyo Jujutsu High','Female','Hidden Inventory Arc','/images/shoko.png','Reverse Cursed Technique'),
('Masamichi Yaga','None','None','Tokyo Jujutsu High','Male','Fearsome Womb Arc','/images/yaga.png','Puppet Creation'),

-- Kyoto Students & Staff
('Aoi Todo','Grade 1','None','Kyoto Jujutsu High','Male','Kyoto Goodwill Event Arc','/images/todo.png','Boogie Woogie'),
('Noritoshi Kamo','Grade 2','Kamo Clan','Kyoto Jujutsu High','Male','Kyoto Goodwill Event Arc','/images/kamo.png','Blood Manipulation'),
('Momo Nishimiya','Grade 2','None','Kyoto Jujutsu High','Female','Kyoto Goodwill Event Arc','/images/momo.png','Flying Broom'),
('Mai Zenin','Grade 2','Zenin Clan','Kyoto Jujutsu High','Female','Kyoto Goodwill Event Arc','/images/mai.png','Revolver'),
('Ultimate Mekamaru','None','None','Kyoto Jujutsu High','Male','Kyoto Goodwill Event Arc','/images/mekamaru.png','Mechanical Body'),
('Kasumi Miwa','Grade 2','None','Kyoto Jujutsu High','Female','Kyoto Goodwill Event Arc','/images/miwa.png','Katana'),
('Arata Nitta','Grade 3','None','Kyoto Jujutsu High','Male','Kyoto Goodwill Event Arc','/images/arata.png','Injury Buffer'),
('Utahime Iori','Semi‑Grade 1','None','Kyoto Jujutsu High','Female','Shibuya Incident Arc','/images/utahime.png','Cursed Energy Amplifier'),
('Kokichi Muta','Grade 2','None','Kyoto Jujutsu High','Male','Kyoto Goodwill Event Arc','/images/kokichi.png','Puppet Control'),

-- Other Sorcerers & Staff
('Kento Nanami','Grade 1','None','Tokyo Jujutsu High','Male','Vs. Mahito Arc','/images/nanami.png','Ratio Technique'),
('Mei Mei','None','None','Tokyo Jujutsu High','Female','Shibuya Incident Arc','/images/meimei.png','Crows'),
('Yuki Tsukumo','Special Grade','None','Independent','Female','Shibuya Incident Arc','/images/yuki.png','Massive Cursed Spirit'),
('Naobito Zenin','Special Grade','Zenin Clan','Tokyo Jujutsu High','Male','Shibuya Incident Arc','/images/naobito.png','Projection Sorcery'),
('Kiyotaka Ijichi','None','None','Tokyo Jujutsu High','Male','Cursed Child Arc','/images/ijichi.png','Driver''s Suit'),
('Takuma Ino','Grade 1','Ino Clan','Tokyo Jujutsu High','Male','Kyoto Goodwill Event Arc','/images/ino.png','Cloth Mask'),
('Tengen','Special Grade','None','Independent','Non-binary','Hidden Inventory Arc','/images/tengen.png','Barrier Technique'),

-- Cursed Spirits & Users
('Suguru Geto','Special Grade','None','Ex‑Jujutsu High','Male','Hidden Inventory Arc','/images/geto.png','Cursed Spirit Manipulation'),
('Toji Fushiguro','No Grade','Zenin Clan','Freelancer','Male','Hidden Inventory Arc','/images/toji.png','Inverted Spear of Heaven'),
('Mahito','Special Grade','None','Cursed Spirit','Male','Cursed Child Arc','/images/mahito.png','Idle Transfiguration'),
('Jogo','Special Grade','None','Cursed Spirit','Male','Shibuya Incident Arc','/images/jogo.png','Volcano Head'),
('Hanami','Special Grade','None','Cursed Spirit','Female','Shibuya Incident Arc','/images/hanami.png','Plant-based Attacks'),
('Dagon','Special Grade','None','Cursed Spirit','Male','Shibuya Incident Arc','/images/dagon.png','Shikigami Fish'),
('Rika Orimoto','Special Grade','None','Cursed Spirit','Female','Cursed Child Arc','/images/rika.png','Queen of Curses'),
('Ryomen Sukuna','Special Grade','None','In‑Yuji','Male','Ryomen Sukuna Arc','/images/sukuna.png','Domain Expansion'),
('Eso','Special Grade','None','Cursed Spirit','Male','Death Painting Arc','/images/eso.png','Rot Technique'),
('Kechizu','Special Grade','None','Cursed Spirit','none','Death Painting Arc','/images/kechizu.png','Poison Blood'),

-- Curse Users & Allies
('Riko Amanai','None','None','Star Plasma Vessel','Female','Hidden Inventory Arc','/images/riko_amanai.png','Star Plasma Vessel'),
('Mimiko Hasaba','None','None','Geto''s Group','Female','Hidden Inventory Arc','/images/mimiko.png','Curse User'),
('Nanako Hasaba','None','None','Geto''s Group','Female','Hidden Inventory Arc','/images/nanako.png','Smartphone'),
('Junpei Yoshino','None','None','Non-combatant','Male','Vs. Mahito Arc','/images/junpei.png','Jellyfish Shikigami'),

-- Non-Sorcerers
('Tsumiki Fushiguro','None','None','Non-combatant','Female','Cursed Child Arc','/images/tsumiki.png','Bedridden'),
('Wasuke Itadori','None','None','Non-combatant','Male','Cursed Child Arc','/images/wasuke.png','Grandfather''s Bed'),
('Yuko Ozawa','None','None','Non-combatant','Female','Post-Shibuya Epilogue','/images/ozawa.png','School Memories');

