import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section } from "@quarkly/components";
import { MdHelp } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				MΞτ∆(¢r¥₱τø)&#123;v≡r$≡&#125;
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				.
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				When Non-Fungible Tokens (NFTs) spawned from the Cryptoverse, new kinds of Metaverses were created.{" "}
				<br />
				These new breed of Virtual Worlds are enabled by Blockchain technology.{" "}
				<br />
				This fusion of Crypto and the Metaverse has given birth to the MetaCryptoverse.
				<br />
				Metaverse Worlds (such as Decentraland, CryptoVoxels, Webaverse, The Sandbox,etc){" "}
				<br />
				that run on NFTs--avatars, land parcels, wearables, and so on,{" "}
				<br />
				these are the pioneers of the emerging Metacryptoverse.
			</Text>
		</Section>
		<Section color="--dark">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				What is...?
			</Text>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					What is The Metaverse?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					The Metaverse is a collective virtual shared space, including the sum of all virtual worlds, augmented reality, and the Internet. It is the concept of a future iteration of the internet, made up of persistent, shared, 3D virtual spaces linked into a perceived virtual universe.
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					What is the Cryptoverse?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					Blockchain technology enables an ecosystem of digital objects that can be verified as unique. This whole ecosystem can be considered as the cryptoverse.{" "}
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					What is the Meta/Crypto-verse?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					The arrival of NFTs has given a breath of new life to the true potential of the Metaverse. The proof of ownership of digital items is ground-breaking in rekindling the foundation of a decentralized Metaverse imbued with the essence of unique digital objects. The MetaCryptoverse is the nexus of the Metaverse and Crypto, both riding on the substrate of blockchain  technology.{"  "}
				</Text>
			</Box>
		</Section>
		<Box />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});