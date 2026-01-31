import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';
import { fade } from '../../../animations';

import { Publication } from '../models/publication';
import { Author } from '../models/author';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  animations: [
    fade
  ]
})
export class PublicationsComponent {

  publications: Publication[];

  constructor(private seoService: SeoService) {

    const content = 'Marieke - Publications';
    const title = 'Marieke - Publications';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

    this.publications = [];

  }

  ngOnInit(): void {

    this.publications = [

      new Publication(
        "Fermion-Monopole Scattering in the Standard Model", 
        "https://arxiv.org/abs/2312.17746",
        "We study the scattering of fermions off 't Hooft lines in the Standard Model. A long-standing paradox suggests that the outgoing fermions necessarily carry fractional quantum numbers. In a previous paper, we resolved this paradox in the context of a number of toy models where we showed that the outgoing radiation is created by operators that are attached to a co-dimension 1 topological surface. This shifts the quantum numbers of the outgoing states associated to non-anomalous symmetries to be integer valued as required, while the quantum numbers associated to anomalous symmetries are fractional. Here we apply these ideas to the Standard Model.",
        this.getAuthorString( 
        [
          new Author("Marieke van Beest", "Stony Brook U., New York, SCGP"), 
          new Author("Philip Boyle Smith", "Tokyo U., IPMU"),
          new Author("Diego Delmastro", "Stony Brook U., New York, SCGP"), 
          new Author("Rishi Mouland", "Cambridge U., DAMTP"),
          new Author("David Tong", "Cambridge U., DAMTP")
        ]),
        "(Dec 29, 2023)",
        "e-Print: 2312.17746 [hep-th]"
        ),

      new Publication(
        "Monopoles, Scattering, and Generalized Symmetries", 
        "https://arxiv.org/abs/2306.07318",
        "We reconsider the problem of electrically charged, massless fermions scattering off magnetic monopoles. The interpretation of the outgoing states has long been a puzzle as, in certain circumstances, they necessarily carry fractional quantum numbers. We argue that consistency requires such outgoing particles to be attached to a topological co-dimension 1 surface, which ends on the monopole. This surface cannot participate in a 2-group with the magnetic 1-form symmetry and is often non-invertible. Equivalently, the outgoing radiation lies in a twisted sector and not in the original Fock space. The outgoing radiation therefore not only carries unconventional flavor quantum numbers, but is often trailed by a topological field theory. We exemplify these ideas in the 1+1 dimensional, chiral 3450 model which shares many of the same features. We comment on the effects of gauge field fluctuations on the lowest angular momentum fermion scattering states in the presence of a magnetic monopole. While, to leading order, these zero modes can penetrate into the monopole core, in the full theory some of the zero modes are lifted and develop a small centrifugal barrier. The dynamics of the zero modes is that of a multi-flavor Schwinger model with a space-dependent gauge coupling. Symmetries and anomalies constrain the fate of the pseudo-zero modes.",
        this.getAuthorString( 
        [
          new Author("Marieke van Beest", "Stony Brook U., New York, SCGP"), 
          new Author("Philip Boyle Smith", "Tokyo U., IPMU"),
          new Author("Diego Delmastro", "Stony Brook U., New York, SCGP"), 
          new Author("Zohar Komargodski", "Stony Brook U., New York, SCGP"),
          new Author("David Tong", "Cambridge U., DAMTP")
        ]),
        "(Jun 12, 2023)",
        "e-Print: 2306.07318 [hep-th]"
        ),

      new Publication(
        "Symmetry TFTs for 3d QFTs from M-theory", 
        "https://arxiv.org/abs/2210.03703",
        "We derive the Symmetry Topological Field Theories (SymTFTs) for 3d super symmetric quantum field theories (QFTs) constructed in M-theory either via geometric engineering or holography. These 4d SymTFTs encode the symmetry structures of the 3d QFTs,for instance the generalized global symmetries and their ’t Hooft anomalies. Using differential cohomology, we derive the SymTFT by reducing M-theory on a 7-manifold Y7, which either is the link of a conical Calabi-Yau four-fold or part of an AdS4×Y7 holographic solution. In the holographic setting we first consider the 3d N=6 ABJ(M) theories and derive the BF-couplings, which allow the identification of the global form of the gauge group,as well as 1-form symmetry anomalies. Secondly, we compute the SymTFT for 3d N=2 quiver gauge theories whose holographic duals are based on Sasaki-Einstein 7-manifolds of type Y7=Yp,k(CP2). The SymTFT encodes 0-and 1-form symmetries, as well as potential ’t Hooft anomalies between these. Furthermore, by studying the gapped boundary conditions of the SymTFT we constrain the allowed choices for U(1) Chern-Simons terms in the dual field theory.",
        this.getAuthorString(  
        [
          new Author("Marieke van Beest", "Stony Brook U., New York, SCGP"), 
          new Author("Dewi S.W. Gould", "Oxford U., Inst. Math."),
          new Author("Sakura Schafer-Nameki", "Oxford U., Inst. Math."),
          new Author("Yi-Nan Wang", "Peking U., Maryland U., Peking U., CHEP")
        ]),
        "(Oct 7, 2022)",
        "Published in: JHEP 02 (2023) 226 • e-Print: 2210.03703 [hep-th]"
        ),

      new Publication(
        "Connecting 5d Higgs branches via Fayet-Iliopoulos deformations", 
        "https://arxiv.org/abs/2110.02872",
        "We describe how the geometry of the Higgs branch of 5d superconformal field theories is transformed under movement along the extended Coulomb branch. Working directly with the (unitary) magnetic quiver, we demonstrate a correspondence between Fayet-Iliopoulos deformations in 3d and 5d mass deformations. When the Higgs branch has multiple cones, characterised by a collection of magnetic quivers, the mirror map is not globally well-defined, however we are able to utilize the correspondence to establish a local version of mirror symmetry. We give several detailed examples of deformations, including decouplings and weak-coupling limits, in (Dn, Dn) conformal matter theories, Tn theory and its parent Pn, for which we find new Lagrangian descriptions given by quiver gauge theories with fundamental and anti-symmetric matter.",
        this.getAuthorString(  
        [
          new Author("Marieke van Beest", "Oxford U., Inst. Math."), 
          new Author("Simone Giacomelli", "Oxford U., Inst. Math., Milan Bicocca U.")
        ]),
        "(Oct 6, 2021)",
        "Published in: JHEP 12 (2021) 202 • e-Print: 2110.02872 [hep-th]"
        ),

      new Publication(
        "Holography, 1-form symmetries, and confinement", 
        "https://arxiv.org/abs/2104.12764",
        "We study confinement in 4d N=1 SU(N) Super-Yang Mills (SYM) from a holographic point of view, focusing on the 1-form symmetry and its relation to chiral symmetry breaking (Xsb). We identify the topological couplings in the 5d truncation of the Klebanov-Strassler solution that determine the 1-form symmetry and its ’t Hooft anomalies. One coupling is a mixed 0-/1-form symmetry anomaly related to Xsb in gapped confining vacua. In the gravity dual we also identify the infrared 4d topological field theory which realizes Xsb and matches the mixed anomaly. Finally, complementing this, we derive the chiral and mixed anomalies from the little string theory realization of pure SYM.",
        this.getAuthorString(  
        [
          new Author("Fabio Apruzzi", "Oxford U., Inst. Math."), 
          new Author("Marieke van Beest", "Oxford U., Inst. Math."), 
          new Author("Dewi S.W. Gould", "Oxford U., Inst. Math."),
          new Author("Sakura Schafer-Nameki", "Oxford U., Inst. Math.")
        ]),
        "(Apr 26, 2021)",
        "Published in: Phys.Rev.D 104 (2021) 6, 066005 • e-Print: 2104.12764 [hep-th]"
        ),

      new Publication(
        "Lectures on the Swampland Program in String Compactifications", 
        "https://arxiv.org/abs/2102.01111",
        "The Swampland program aims to determine the constraints that an effective field theory must satisfy to be consistent with a UV embedding in a quantum gravity theory. Different proposals have been formulated in the form of Swampland conjectures. In these lecture notes, we provide a pedagogical introduction to the most important Swampland conjectures, their connections and their realization in string theory compactifications. The notes are based on the series of lectures given by Irene Valenzuela at the online QFT and Geometry summer school in July 2020.",
        this.getAuthorString(  
        [
          new Author("Marieke van Beest", "Oxford U., Inst. Math."), 
          new Author("José Calderón-Infante", "CSIC, Madrid"), 
          new Author("Delaram Mirfendereski", "Bogazici U."),
          new Author("Irene Valenzuela", "Jefferson Lab")
        ]),
        "(Feb 1, 2021)",
        "Published in: Phys.Rept. 989 (2022) 1-50 • e-Print: 2102.01111 [hep-th]"
        ),

      new Publication(
        "(5d RG-flow) Trees in the Tropical Rain Forest", 
        "https://arxiv.org/abs/2011.07033",
        "5d superconformal field theories (SCFTs) can be obtained from 6d SCFTs by circle compactification and mass deformation. Successive decoupling of hypermultiplet matter and RG-flow generates a decoupling tree of descendant 5d SCFTs. In this paper we determine the magnetic quivers and Hasse diagrams, that encode the Higgs branches of 5d SCFTs, for entire decoupling trees. Central to this undertaking is the approach in [1], which, starting from the generalized toric polygons (GTPs) dual to 5-brane webs/tropical curves, provides a systematic and succinct derivation of magnetic quivers and their Hasse diagrams. The decoupling in the GTP description is straightforward, and generalizes the standard flop transitions of curves in toric polygons. We apply this approach to a large class of 5d KK-theories, and compute the Higgs branches for their descendants. In particular we determine the decoupling tree for all rank 2 5d SCFTs. For each tree, we also identify the flavor symmetry algebras from the magnetic quivers, including non-simply-laced flavor symmetries.",
        this.getAuthorString(  
        [
          new Author("Marieke van Beest", "Oxford U., Inst. Math."), 
          new Author("Antoine Bourget", "Imperial Coll., London"), 
          new Author("Julius Eckhard", "Oxford U., Inst. Math."),
          new Author("Sakura Schäfer-Nameki", "Oxford U., Inst. Math.")
        ]),
        "(Nov 13, 2020)",
        "Published in: JHEP 03 (2021) 241 • e-Print: 2011.07033 [hep-th]"
        ),

      new Publication(
        "(Symplectic) Leaves and (5d Higgs) Branches in the Poly(go)nesian Tropical Rain Forest", 
        "https://arxiv.org/abs/2008.05577",
        "We derive the structure of the Higgs branch of 5d superconformal field theories or gauge theories from their realization as a generalized toric polygon (or dot diagram). This approach is motivated by a dual, tropical curve decomposition of the (p, q) 5-brane-web system. We define an edge coloring, which provides a decomposition of the generalized toric polygon into a refined Minkowski sum of sub-polygons, from which we compute the magnetic quiver. The Coulomb branch of the magnetic quiver is then conjecturally identified with the 5d Higgs branch. Furthermore, from partial resolutions, we identify the symplectic leaves of the Higgs branch and thereby the entire foliation structure. In the case of strictly toric polygons, this approach reduces to the description of deformations of the Calabi-Yau singularities in terms of Minkowski sums.",
        this.getAuthorString(  
        [
          new Author("Marieke van Beest", "Oxford U., Inst. Math."), 
          new Author("Antoine Bourget", "Imperial Coll., London"), 
          new Author("Julius Eckhard", "Oxford U., Inst. Math."),
          new Author("Sakura Schäfer-Nameki", "Oxford U., Inst. Math.")
        ]),
        "(Aug 12, 2020)",
        "Published in: JHEP 11 (2020) 124 • e-Print: 2008.05577 [hep-th]"
        ),

      new Publication(
        "I/C-Extremization in M/F-Duality", 
        "https://arxiv.org/abs/2008.05577",
        "We study the holographic dual to I/C-extremization for 2d (0,2) superconformal field theories (SCFTs) that have an AdS3 dual realized in Type IIB with varying axio-dilaton, i.e. F-theory. M/F-duality implies that such AdS3 solutions can be mapped to AdS2 solutions in M-theory, which are holographically dual to superconformal quantum mechanics (SCQM), obtained by dimensional reduction of the 2d SCFTs. We analyze the corresponding map between holographic I/C-extremization in F-theory and I-extremization in M-theory, where in general the latter receives corrections relative to the F-theory result.",
        this.getAuthorString(  
        [
          new Author("Marieke van Beest", "Oxford U., Inst. Math."), 
          new Author("Sebastjan Cizel", "Oxford U., Inst. Math."), 
          new Author("Sakura Schäfer-Nameki", "Oxford U., Inst. Math."),
          new Author("James Sparks", "Oxford U., Inst. Math."),
        ]),
        "(Apr 27, 2020)",
        "Published in: SciPost Phys. 9 (2020) 3, 029 • e-Print: 2004.04020 [hep-th]"
        ),
    ]
  }

  public getAuthorString(authors: Author[]): string {
    let res = "";
    authors.forEach(element => {
      res += element.name + " (" + element.affiliation + "), "
    });

    return res.slice(0,-2);
  }





}
